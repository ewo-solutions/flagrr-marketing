import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";
import LegalPage from "@/components/legal/LegalPage";
import { privacyUpdated, privacyIntro, privacySections } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Flagrr collects, uses and protects personal information, in line with POPIA.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div style={{ color: "#12271F" }}>
      <Nav
        theme="light"
        logoHref="/"
        links={[
          { label: "For clubs", href: "/clubs" },
          { label: "For golfers", href: "/golfers" },
          { label: "For advertisers", href: "/advertisers" },
        ]}
        cta={{ label: "Terms of Use", href: "/terms" }}
      />
      <LegalPage title="Privacy Policy" updated={privacyUpdated} intro={privacyIntro} sections={privacySections} />
      <FooterCondensed
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
          { label: "For golfers", href: "/golfers" },
          { label: "Terms", href: "/terms" },
          { label: "Privacy", href: "/privacy" },
        ]}
      />
    </div>
  );
}
