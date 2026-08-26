"use client";

import Reveal from "@/components/Reveal";
import { pricingTiers } from "@/content/advertisers";
import { PHONE_HREF } from "@/content/contact";

export default function AdPricingSection() {
  return (
    <section id="pricing" className="fl-px" style={{ background: "#12271F", color: "#F6F5F0", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "56ch", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>indicative pricing</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em" }}>
            Pick a place to start.
          </h2>
          <p style={{ margin: "22px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.68)" }}>
            Figures below are illustrative — get in touch for a real quote against your audience and dates.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20, margin: "56px 0 0", alignItems: "stretch" }}>
          {pricingTiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "30px 26px",
                borderRadius: 20,
                background: t.featured ? "#1F4234" : "rgba(246,245,240,.04)",
                border: t.featured ? "1px solid rgba(205,222,92,.5)" : "1px solid rgba(246,245,240,.14)",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", opacity: 0.6 }}>{t.name}</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, margin: "16px 0 0" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 38, letterSpacing: "-.03em", color: t.featured ? "#CDDE5C" : "#F6F5F0" }}>{t.price}</span>
                {t.per && <span style={{ fontSize: 13, opacity: 0.6, paddingBottom: 6 }}>{t.per}</span>}
              </div>
              <p style={{ margin: "14px 0 22px", fontSize: 14, fontWeight: 300, lineHeight: 1.55, opacity: 0.75 }}>{t.blurb}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "0 0 26px" }}>
                {t.features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, fontWeight: 300, lineHeight: 1.5 }}>
                    <span style={{ color: "#CDDE5C", fontSize: 11, paddingTop: 2 }}>&#9679;</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={PHONE_HREF}
                style={{
                  marginTop: "auto",
                  display: "block",
                  textAlign: "center",
                  padding: "13px 20px",
                  borderRadius: 999,
                  background: t.featured ? "#CDDE5C" : "rgba(246,245,240,.1)",
                  color: t.featured ? "#12271F" : "#F6F5F0",
                  fontSize: 13.5,
                  fontWeight: 600,
                  transition: "opacity .2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Enquire (coming soon)
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
