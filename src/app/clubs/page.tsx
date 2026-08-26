import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";
import ClubsHero from "@/components/clubs/ClubsHero";
import ConsoleSection from "@/components/clubs/ConsoleSection";
import BeforeAfterSection from "@/components/clubs/BeforeAfterSection";
import DemoSection from "@/components/clubs/DemoSection";
import { PHONE_HREF } from "@/content/contact";

export const metadata: Metadata = {
  title: "For Clubs",
  description:
    "A branded loyalty programme, a reward catalogue you control, member analytics and automatic fraud review. R2 500 a month to start.",
};

export default function ClubsPage() {
  return (
    <div style={{ color: "#12271F" }}>
      <Nav
        theme="light"
        logoHref="/"
        links={[
          { label: "Overview", href: "/" },
          { label: "For golfers", href: "/golfers" },
          { label: "For advertisers", href: "/advertisers" },
          { label: "Pricing", href: "/#pricing" },
        ]}
        cta={{ label: "Sign up your club (coming soon)", href: PHONE_HREF }}
      />
      <ClubsHero />
      <ConsoleSection />
      <BeforeAfterSection />
      <DemoSection />
      <FooterCondensed
        links={[
          { label: "Overview", href: "/" },
          { label: "For golfers", href: "/golfers" },
          { label: "For advertisers", href: "/advertisers" },
          { label: "Terms", href: "#" },
          { label: "Privacy", href: "#" },
        ]}
      />
    </div>
  );
}
