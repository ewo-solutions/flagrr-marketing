import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import { FooterFull } from "@/components/Footer";
import Hero from "@/components/home/Hero";
import AudienceSplit from "@/components/home/AudienceSplit";
import CashFacts from "@/components/home/CashFacts";
import LoopSection from "@/components/home/LoopSection";
import CatalogueSection from "@/components/home/CatalogueSection";
import TiersSection from "@/components/home/TiersSection";
import CalculatorSection from "@/components/home/CalculatorSection";
import ClubValueProps from "@/components/home/ClubValueProps";
import PricingSection from "@/components/home/PricingSection";
import DownloadSection from "@/components/home/DownloadSection";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav
        theme="dark"
        logoHref="/#top"
        links={[
          { label: "How it works", href: "#loop" },
          { label: "For clubs", href: "/clubs" },
          { label: "For golfers", href: "/golfers" },
          { label: "For advertisers", href: "/advertisers" },
          { label: "Pricing", href: "#pricing" },
        ]}
        cta={{ label: "Get the app (coming soon)", href: "#download", disabled: true }}
      />
      <Hero />
      <AudienceSplit />
      <CashFacts />
      <LoopSection />
      <CatalogueSection />
      <TiersSection />
      <CalculatorSection />
      <ClubValueProps />
      <PricingSection />
      <DownloadSection />
      <FooterFull />
    </>
  );
}
