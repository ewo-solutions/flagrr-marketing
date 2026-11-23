import { NextResponse } from "next/server";

/**
 * "Bring it to your club": a golfer nominates the club they play at. Each
 * nomination is emailed to the Flagrr team as a warm club lead. Nothing is
 * stored here — the email is the record.
 *
 * Sends through the Resend HTTP API (no SDK), the same provider the Flagrr
 * app uses. Needs RESEND_API_KEY and RESEND_FROM_EMAIL (an address on a
 * domain verified in Resend) set on this site's Vercel project.
 * NOMINATION_EMAILS optionally overrides the recipients (comma-separated).
 */

export interface NominationInput {
  club: string;
  town?: string;
  name: string;
  email: string;
  mayTellClub?: boolean;
  source?: string;
  /** Honeypot: real visitors never see or fill this field. */
  company?: string;
}

const DEFAULT_RECIPIENTS = ["lourens@ewosolutions.com", "swing@flagrr.com"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SEND_TIMEOUT_MS = 8000;

function recipients() {
  const list = (process.env.NOMINATION_EMAILS || "")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => EMAIL_RE.test(s));
  return list.length ? list : DEFAULT_RECIPIENTS;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "");

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(req: Request) {
  let body: Partial<NominationInput>;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid request body");
  }

  // Bots fill every field; pretend it worked so they don't retry.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true });

  const club = clean(body.club, 80);
  const town = clean(body.town, 60);
  const name = clean(body.name, 80);
  const email = clean(body.email, 120).toLowerCase();
  const mayTellClub = body.mayTellClub === true;
  const source = clean(body.source, 80) || "flagrr.com";

  if (!club || !name || !email) return badRequest("Please fill in your club, your name and your email.");
  if (!EMAIL_RE.test(email)) return badRequest("That email doesn't look right.");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Nomination not sent: RESEND_API_KEY or RESEND_FROM_EMAIL is not set");
    return NextResponse.json(
      { error: "We couldn't send that just now. Email swing@flagrr.com with your club's name and we'll take it from there." },
      { status: 503 },
    );
  }

  const when = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg", dateStyle: "medium", timeStyle: "short" });
  const rows: [string, string][] = [
    ["Club", club],
    ["Town or city", town || "Not given"],
    ["Nominated by", `${name} <${email}>`],
    ["May we tell the club they nominated it?", mayTellClub ? "Yes" : "No"],
    ["Where", source],
    ["When", `${when} (SAST)`],
  ];
  const subject = `Club nomination: ${club}${town ? ` (${town})` : ""}`;
  const text = [`A golfer nominated a club for Flagrr.`, "", ...rows.map(([k, v]) => `${k}: ${v}`), "", `Reply to this email to reach ${name}.`].join("\n");
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#1F4234;max-width:560px">
<p style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#00805A;margin:0 0 8px">Club nomination</p>
<h1 style="font-family:Georgia,serif;font-size:26px;line-height:1.2;margin:0 0 18px">${esc(club)}</h1>
<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;font-size:15px">
${rows.map(([k, v]) => `<tr><td style="padding:9px 14px 9px 0;border-top:1px solid #E5E1D3;color:#555B66;vertical-align:top;width:42%">${esc(k)}</td><td style="padding:9px 0;border-top:1px solid #E5E1D3">${esc(v)}</td></tr>`).join("\n")}
</table>
<p style="font-size:14px;color:#555B66;margin:18px 0 0">Reply to this email to reach ${esc(name)}.</p>
</div>`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: recipients(), reply_to: email, subject, html, text }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`Nomination email failed (${res.status}): ${await res.text().catch(() => "")}`);
      return NextResponse.json({ error: "That didn't go through. Please try again in a moment." }, { status: 502 });
    }
  } catch (err) {
    console.error("Nomination email threw", err);
    return NextResponse.json({ error: "That didn't go through. Please try again in a moment." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }

  return NextResponse.json({ ok: true });
}
