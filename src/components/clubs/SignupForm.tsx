"use client";

import { useId, useState, type FormEvent } from "react";
import type { ClubSignupSuccess } from "@/app/api/club-signup/route";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 12,
  border: "1px solid rgba(18,39,31,.18)",
  background: "#FFFFFF",
  color: "#12271F",
  fontSize: 15,
  fontFamily: "var(--font-body)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  margin: "0 0 8px",
  fontFamily: "var(--font-mono)",
  fontSize: 10.5,
  letterSpacing: ".1em",
  color: "rgba(18,39,31,.6)",
  textTransform: "uppercase",
};

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      {children}
    </div>
  );
}

/** Builds a real (invisible) HTML form and submits it, sending the browser
 * to Payfast's hosted payment page with the fields Payfast expects — this
 * has to be a genuine top-level navigation, not a fetch, since it's handing
 * the user off to another origin to enter card details. */
function redirectToPayfast({ actionUrl, fields }: ClubSignupSuccess) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = actionUrl;
  form.style.display = "none";
  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}

export default function SignupForm() {
  const idPrefix = useId();
  const [sameEmail, setSameEmail] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const data = new FormData(e.currentTarget);
    const adminEmail = String(data.get("adminEmail") || "").trim();
    const contactEmail = sameEmail ? adminEmail : String(data.get("contactEmail") || "").trim();

    const body = {
      courseName: String(data.get("courseName") || "").trim(),
      contactEmail,
      contactPhone: String(data.get("contactPhone") || "").trim() || undefined,
      adminFirstName: String(data.get("adminFirstName") || "").trim(),
      adminLastName: String(data.get("adminLastName") || "").trim(),
      adminEmail,
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/club-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const payload = await res.json();
      if (!res.ok) {
        setError(payload?.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      redirectToPayfast(payload as ClubSignupSuccess);
      // Leave `submitting` true — the browser is navigating away to Payfast.
    } catch {
      setError("Could not reach the signup service. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <Field id={`${idPrefix}-courseName`} label="Club / course name">
        <input id={`${idPrefix}-courseName`} name="courseName" type="text" required autoComplete="organization" style={inputStyle} placeholder="Strand Golf Club" />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="fl-signup-row">
        <Field id={`${idPrefix}-adminFirstName`} label="Admin first name">
          <input id={`${idPrefix}-adminFirstName`} name="adminFirstName" type="text" required autoComplete="given-name" style={inputStyle} />
        </Field>
        <Field id={`${idPrefix}-adminLastName`} label="Admin last name">
          <input id={`${idPrefix}-adminLastName`} name="adminLastName" type="text" required autoComplete="family-name" style={inputStyle} />
        </Field>
      </div>

      <Field id={`${idPrefix}-adminEmail`} label="Admin email — used to log in">
        <input id={`${idPrefix}-adminEmail`} name="adminEmail" type="email" required autoComplete="email" style={inputStyle} placeholder="you@yourclub.co.za" />
      </Field>

      <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "rgba(18,39,31,.7)" }}>
        <input
          type="checkbox"
          checked={sameEmail}
          onChange={(e) => setSameEmail(e.target.checked)}
          style={{ width: 16, height: 16, accentColor: "#00805A" }}
        />
        Club contact email is the same as the admin email above
      </label>

      {!sameEmail && (
        <Field id={`${idPrefix}-contactEmail`} label="Club contact email">
          <input id={`${idPrefix}-contactEmail`} name="contactEmail" type="email" required={!sameEmail} autoComplete="email" style={inputStyle} placeholder="info@yourclub.co.za" />
        </Field>
      )}

      <Field id={`${idPrefix}-contactPhone`} label="Club contact phone (optional)">
        <input id={`${idPrefix}-contactPhone`} name="contactPhone" type="tel" autoComplete="tel" style={inputStyle} placeholder="021 555 0100" />
      </Field>

      {error && (
        <div role="alert" style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(222,92,92,.12)", border: "1px solid rgba(222,92,92,.4)", color: "#A33", fontSize: 14 }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          marginTop: 8,
          padding: "16px 24px",
          borderRadius: 999,
          border: "none",
          background: submitting ? "rgba(18,39,31,.35)" : "#12271F",
          color: "#F6F5F0",
          fontSize: 15,
          fontWeight: 600,
          cursor: submitting ? "default" : "pointer",
          transition: "background .2s ease",
        }}
      >
        {submitting ? "Taking you to secure payment…" : "Continue to payment — R2 500"}
      </button>
      <p style={{ margin: 0, fontSize: 12.5, fontWeight: 300, color: "rgba(18,39,31,.55)", textAlign: "center" }}>
        You’ll pay securely on Payfast. R2 500 today, then R5 250 / month ex VAT from month two. Cancel any time.
      </p>
    </form>
  );
}
