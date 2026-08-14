import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Payment Cancelled",
  robots: { index: false },
};

export default function SignupCancelPage() {
  return (
    <div style={{ color: "#12271F" }}>
      <Nav
        theme="light"
        logoHref="/"
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
        ]}
        cta={{ label: "Sign up your club", href: "/clubs/signup" }}
      />
      <section className="fl-px" style={{ padding: "200px 40px 140px", background: "#F6F5F0" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>payment cancelled</span>
          <h1 style={{ margin: "22px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,4.6vw,52px)", lineHeight: 1, letterSpacing: "-.03em" }}>
            No charge was made.
          </h1>
          <p style={{ margin: "18px 0 0", fontSize: 16.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.7)" }}>
            You cancelled before paying, so nothing happened on our end — your club hasn’t been set up. Whenever you’re ready, you can pick up right where you left off.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, margin: "36px 0 0" }}>
            <Link
              href="/clubs/signup"
              style={{ display: "inline-flex", padding: "15px 28px", borderRadius: 999, background: "#12271F", color: "#F6F5F0", fontSize: 14.5, fontWeight: 600 }}
            >
              Try again
            </Link>
            <Link href="/clubs" style={{ display: "inline-flex", padding: "15px 24px", borderRadius: 999, border: "1px solid rgba(18,39,31,.25)", color: "#12271F", fontSize: 14.5 }}>
              Back to For Clubs
            </Link>
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
