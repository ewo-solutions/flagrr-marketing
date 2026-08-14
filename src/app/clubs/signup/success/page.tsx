import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "You're In",
  robots: { index: false },
};

export default async function SignupSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course } = await searchParams;

  return (
    <div style={{ color: "#12271F" }}>
      <Nav
        theme="light"
        logoHref="/"
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
        ]}
        cta={{ label: "Overview", href: "/" }}
      />
      <section className="fl-px" style={{ padding: "200px 40px 140px", background: "#F6F5F0" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", width: 62, height: 62, borderRadius: "50%", background: "#CCF2E6", alignItems: "center", justifyContent: "center" }}>
            <IconCheck size={30} color="#00805A" strokeWidth={2.4} />
          </span>
          <h1 style={{ margin: "26px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,5vw,58px)", lineHeight: 1, letterSpacing: "-.03em" }}>
            Payment received.
          </h1>
          <p style={{ margin: "20px 0 0", fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.72)" }}>
            {course ? (
              <>
                Thanks — we’re setting up <strong style={{ fontWeight: 600 }}>{course}</strong> on Flagrr right now.
              </>
            ) : (
              "Thanks — we’re setting up your club on Flagrr right now."
            )}
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.62)" }}>
            Your admin login is on its way by email — it usually lands within a few minutes, occasionally a little longer while the payment confirmation comes through. Check spam if you don’t see it.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, margin: "40px 0 0" }}>
            <Link
              href="/"
              style={{ display: "inline-flex", padding: "15px 28px", borderRadius: 999, background: "#12271F", color: "#F6F5F0", fontSize: 14.5, fontWeight: 600 }}
            >
              Back to Flagrr
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
