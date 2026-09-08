import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";
import LegalPage from "@/components/legal/LegalPage";
import { termsUpdated, termsIntro, termsSections } from "@/content/terms";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that cover use of the Flagrr app and this website.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
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
        cta={{ label: "Privacy Policy", href: "/privacy" }}
      />
      <LegalPage title="Terms of Use" updated={termsUpdated} intro={termsIntro} sections={termsSections} />
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
