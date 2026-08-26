"use client";

import { FlagrrIcon } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { PHONE_HREF } from "@/content/contact";

export default function AdCTASection() {
  return (
    <section className="fl-px" style={{ background: "#F6F5F0", padding: "140px 40px 120px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <FlagrrIcon color="clubgreen" height={56} style={{ margin: "0 auto 30px" }} />
        <Reveal as="h2" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,5.4vw,82px)", lineHeight: 0.96, letterSpacing: "-.03em", color: "#12271F" }}>
          Let’s talk placements.
        </Reveal>
        <Reveal delay={1} as="p" style={{ margin: "24px auto 0", maxWidth: "44ch", fontSize: 18, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.7)" }}>
          Tell us the audience and the dates, and we’ll tell you straight away what’s realistic.
        </Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, margin: "40px 0 0" }}>
          <a
            href={PHONE_HREF}
            style={{ display: "inline-flex", padding: "17px 32px", borderRadius: 999, background: "#12271F", color: "#F6F5F0", fontSize: 15, fontWeight: 600, transition: "background .2s ease, color .2s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00805A";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#12271F";
              e.currentTarget.style.color = "#F6F5F0";
            }}
          >
            Advertise with Flagrr (coming soon)
          </a>
        </div>
      </div>
    </section>
  );
}
