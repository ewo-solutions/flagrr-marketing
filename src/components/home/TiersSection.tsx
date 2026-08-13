"use client";

import { useRef } from "react";
import { tierDefs } from "@/content/home";
import { useCompactMotion, useScrollState, useSectionProgressRef } from "@/lib/hooks";

function TierRow({ t, fill }: { t: (typeof tierDefs)[number]; fill: number }) {
  return (
    <div style={{ position: "relative", padding: "24px 26px", borderRadius: 16, background: "rgba(246,245,240,.04)", border: `1px solid ${t.border}`, overflow: "hidden", transition: "background .5s ease, border-color .5s ease" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100%", transformOrigin: "left center", transform: `scaleX(${fill})`, background: t.wash, transition: "transform .1s linear" }} />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto auto", gap: 22, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 23, letterSpacing: "-.015em", color: t.fg }}>{t.name}</div>
          <div style={{ margin: "4px 0 0", fontSize: 12.5, fontWeight: 300, color: "rgba(246,245,240,.62)" }}>{t.perk}</div>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", color: "rgba(246,245,240,.5)", textTransform: "uppercase" }}>{t.threshold}</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, letterSpacing: "-.02em", color: t.fg, minWidth: 66, textAlign: "right" }}>{t.mult}</div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>tiers</span>
      <h2 style={{ margin: "22px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,70px)", lineHeight: 0.97, letterSpacing: "-.03em", color: "#F6F5F0" }}>
        A rate that climbs.
      </h2>
      <p style={{ margin: "22px 0 0", maxWidth: "38ch", fontSize: 17, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.74)" }}>
        Tier is qualified per quarter on Flagrr Cash earned, not a lifetime total — and a quiet quarter can only drop a member one step, never all the way back.
      </p>
      <div style={{ margin: "30px 0 0", padding: "18px 22px", borderLeft: "2px solid #CDDE5C", maxWidth: "38ch", fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.72)" }}>
        Gold and Platinum also get a free R100 / R200 bar voucher each quarter they qualify — paid automatically, nothing to redeem.
      </div>
    </div>
  );
}

export default function TiersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = useScrollState();
  const compact = useCompactMotion();
  const progress = useSectionProgressRef(ref, scroll);

  if (compact) {
    return (
      <section id="tiers" style={{ background: "#12271F", color: "#F6F5F0" }}>
        <div className="fl-px fl-split-b" style={{ maxWidth: 1180, width: "100%", margin: "0 auto", padding: "100px 40px" }}>
          <Copy />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {tierDefs.map((t) => (
              <TierRow key={t.name} t={t} fill={1} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tiers" ref={ref} style={{ background: "#12271F", color: "#F6F5F0" }}>
      <div style={{ height: "260vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div className="fl-px fl-split-b" style={{ maxWidth: 1180, width: "100%", margin: "0 auto", display: "grid", alignItems: "center" }}>
            <Copy />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {tierDefs.map((t, i) => {
                const start = i / 4;
                const fill = Math.min(1, Math.max(0, (progress - start) * 4.6));
                return <TierRow key={t.name} t={t} fill={fill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
