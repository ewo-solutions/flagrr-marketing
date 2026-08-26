import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";
import GolfersHero from "@/components/golfers/GolfersHero";
import WhatYouGet from "@/components/golfers/WhatYouGet";
import ReferralSection from "@/components/golfers/ReferralSection";
import TiersStreaks from "@/components/golfers/TiersStreaks";
import FAQSection from "@/components/golfers/FAQSection";
import GetAppSection from "@/components/golfers/GetAppSection";

export const metadata: Metadata = {
  title: "For Golfers",
  description:
    "Scan the receipt you were going to bin. Earn Flagrr Cash on it. Spend it on rewards your club actually stocks. Free forever.",
};

export default function GolfersPage() {
  return (
    <>
      <Nav
        theme="dark"
        logoHref="/"
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
          { label: "For advertisers", href: "/advertisers" },
          { label: "Questions", href: "#faq" },
        ]}
        cta={{ label: "Get the app", href: "#get" }}
      />
      <GolfersHero />
      <WhatYouGet />
      <ReferralSection />
      <TiersStreaks />
      <FAQSection />
      <GetAppSection />
      <FooterCondensed
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
          { label: "For advertisers", href: "/advertisers" },
          { label: "Terms", href: "#" },
          { label: "Privacy", href: "#" },
        ]}
        legalNote="Flagrr Cash has no monetary value and cannot be bought, sold or cashed out."
      />
    </>
  );
}
