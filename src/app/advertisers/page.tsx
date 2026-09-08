import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { FooterCondensed } from "@/components/Footer";
import AdvertisersHero from "@/components/advertisers/AdvertisersHero";
import FormatsSection from "@/components/advertisers/FormatsSection";
import ShowcaseSection from "@/components/advertisers/ShowcaseSection";
import StepsSection from "@/components/advertisers/StepsSection";
import AdPricingSection from "@/components/advertisers/AdPricingSection";
import AdCTASection from "@/components/advertisers/AdCTASection";
import { PHONE_HREF } from "@/content/contact";

export const metadata: Metadata = {
  title: "For Advertisers",
  description: "Put your brand in front of golfers who are already spending — home screen banners, sponsored rewards, post-scan placements and segmented push.",
};

export default function AdvertisersPage() {
  return (
    <div style={{ color: "#12271F" }}>
      <Nav
        theme="dark"
        logoHref="/"
        links={[
          { label: "Overview", href: "/" },
          { label: "For clubs", href: "/clubs" },
          { label: "For golfers", href: "/golfers" },
          { label: "Ad formats", href: "#formats" },
        ]}
        cta={{ label: "Advertise with Flagrr (coming soon)", href: PHONE_HREF }}
      />
      <AdvertisersHero />
      <FormatsSection />
      <ShowcaseSection />
      <StepsSection />
      <AdPricingSection />
      <AdCTASection />
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
