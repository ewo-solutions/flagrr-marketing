import { NextResponse } from "next/server";
import { APP_URL, SITE_URL } from "@/lib/env";

export interface ClubSignupInput {
  courseName: string;
  contactEmail: string;
  contactPhone?: string;
  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
}

export interface ClubSignupSuccess {
  actionUrl: string;
  fields: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

/**
 * Proxies the marketing site's club signup form to the Flagrr app's own
 * backend, which owns the Payfast merchant account, the subscription
 * pricing, and the club/admin database — this route never sees Payfast
 * credentials and never touches a database. It only exists so the browser
 * doesn't need to know the app's API shape or origin, and so we can inject
 * our own return/cancel URLs.
 *
 * On success, returns `{ actionUrl, fields }`: the client builds a real HTML
 * form POST from these (not a fetch redirect) to send the browser to
 * Payfast's hosted payment page, per Payfast's integration model.
 */
export async function POST(req: Request) {
  let body: Partial<ClubSignupInput>;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid request body");
  }

  const courseName = body.courseName?.trim();
  const contactEmail = body.contactEmail?.trim().toLowerCase();
  const contactPhone = body.contactPhone?.trim() || undefined;
  const adminFirstName = body.adminFirstName?.trim();
  const adminLastName = body.adminLastName?.trim();
  const adminEmail = body.adminEmail?.trim().toLowerCase();

  if (!courseName || !contactEmail || !adminFirstName || !adminLastName || !adminEmail) {
    return badRequest("Please fill in the club name, contact email, and admin name and email.");
  }
  if (!EMAIL_RE.test(contactEmail)) return badRequest("That contact email doesn't look right.");
  if (!EMAIL_RE.test(adminEmail)) return badRequest("That admin email doesn't look right.");

  if (!SITE_URL.startsWith("https://")) {
    // Payfast (and the app's own endpoint) flatly reject non-https
    // return/cancel URLs, so this can only be exercised end-to-end once
    // deployed. Fail clearly here instead of forwarding a confusing 400
    // from the upstream service.
    return NextResponse.json(
      {
        error:
          "This site's SITE_URL isn't set to a public https:// address yet, so Payfast checkout can't be completed. This is expected in local development — set SITE_URL once deployed.",
      },
      { status: 501 },
    );
  }

  const returnUrl = `${SITE_URL}/clubs/signup/success?course=${encodeURIComponent(courseName)}`;
  const cancelUrl = `${SITE_URL}/clubs/signup/cancel`;

  let upstream: Response;
  try {
    upstream = await fetch(`${APP_URL}/api/courses?action=initiateSignup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseName,
        contactEmail,
        contactPhone,
        adminFirstName,
        adminLastName,
        adminEmail,
        returnUrl,
        cancelUrl,
      }),
      cache: "no-store",
    });
  } catch (err) {
    console.error("club-signup: could not reach app backend", err);
    return NextResponse.json({ error: "Could not reach the Flagrr signup service. Please try again shortly." }, { status: 502 });
  }

  let payload: unknown;
  try {
    payload = await upstream.json();
  } catch {
    payload = null;
  }

  if (!upstream.ok) {
    const message =
      payload && typeof payload === "object" && "error" in payload && typeof (payload as { error?: unknown }).error === "string"
        ? (payload as { error: string }).error
        : "The signup couldn't be started. Please try again.";
    return NextResponse.json({ error: message }, { status: upstream.status >= 400 && upstream.status < 500 ? upstream.status : 502 });
  }

  const result = payload as Partial<ClubSignupSuccess> | null;
  if (!result?.actionUrl || !result.fields) {
    console.error("club-signup: unexpected upstream response shape", payload);
    return NextResponse.json({ error: "The signup couldn't be started. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ actionUrl: result.actionUrl, fields: result.fields } satisfies ClubSignupSuccess);
}
