import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";
import SignupForm from "@/components/clubs/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up Your Club",
  description: "Get your club set up on Flagrr in a few minutes. R2 500 for your first month, then R5 250 / month ex VAT.",
};

const featureLines = [
  "Unlimited members, free to them",
  "Reward catalogue with variants and per-item Flagrr Cash pricing",
  "Automatic receipt OCR, matching and rating",
  "Staff accounts and in-person voucher redemption",
  "Priority support by phone and email",
];

export default function ClubSignupPage() {
  return (
    <div style={{ color: "#12271F" }}>
      <Nav
        theme="light"
        logoHref="/"
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
          { label: "Pricing", href: "/#pricing" },
        ]}
        cta={{ label: "Book a walkthrough instead", href: "/clubs#demo" }}
      />

      <section className="fl-px" style={{ padding: "160px 40px 120px", background: "#F6F5F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>sign up your club</span>
          <h1 style={{ margin: "22px 0 0", maxWidth: "18ch", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,5vw,68px)", lineHeight: 0.97, letterSpacing: "-.03em" }}>
            A few details, then straight to payment.
          </h1>
          <p style={{ margin: "22px 0 0", maxWidth: "50ch", fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.7)" }}>
            Tell us about your club and who’ll run it. You’ll pay securely on Payfast, and your admin login lands in their inbox as soon as the payment clears.
          </p>

          <div className="fl-split-c" style={{ display: "grid", gap: 56, margin: "56px 0 0", alignItems: "start" }}>
            <div style={{ padding: "36px 32px", borderRadius: 22, background: "#FFFFFF", border: "1px solid rgba(18,39,31,.1)", boxShadow: "0 40px 70px -48px rgba(18,39,31,.35)" }}>
              <SignupForm />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ padding: "30px 28px", borderRadius: 22, background: "#12271F", color: "#F6F5F0", border: "1px solid rgba(205,222,92,.5)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", opacity: 0.6 }}>Flagrr for Clubs</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 9, margin: "16px 0 0", padding: "6px 12px", borderRadius: 999, background: "rgba(205,222,92,.14)", border: "1px solid rgba(205,222,92,.5)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: "#CDDE5C" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".16em", textTransform: "uppercase", color: "#CDDE5C" }}>early club special · first month</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 12, margin: "18px 0 0" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 48, lineHeight: 0.88, letterSpacing: "-.03em", color: "#CDDE5C", fontVariantNumeric: "tabular-nums" }}>R2 500</span>
                  <span style={{ fontSize: 13, paddingBottom: 6, opacity: 0.62 }}>today</span>
                </div>
                <p style={{ margin: "10px 0 0", fontSize: 13, fontWeight: 300, lineHeight: 1.55, opacity: 0.75 }}>
                  Then <strong style={{ fontWeight: 500 }}>R5 250 / month ex VAT</strong> from month two. Unlimited members, every feature, cancel any time.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "22px 0 0", paddingTop: 20, borderTop: "1px solid rgba(246,245,240,.14)" }}>
                  {featureLines.map((f) => (
                    <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, fontWeight: 300, lineHeight: 1.5 }}>
                      <span style={{ color: "#CDDE5C", fontSize: 12, paddingTop: 1 }}>&#9679;</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: "22px 24px", borderRadius: 16, background: "#CCF2E6", border: ".5px solid #00805A" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".16em", color: "#00805A", textTransform: "uppercase" }}>how this works</div>
                <p style={{ margin: "10px 0 0", fontSize: 13.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.78)" }}>
                  Payment is handled securely by Payfast — we never see or store your card details. The moment it clears, your club and admin login are created automatically and emailed to the admin address above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCondensed
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
          { label: "Terms", href: "#" },
          { label: "Privacy", href: "#" },
        ]}
      />
    </div>
  );
}
