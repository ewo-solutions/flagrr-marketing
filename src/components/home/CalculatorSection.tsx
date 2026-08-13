"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { calcTierMults, calcTierNames } from "@/content/home";
import { fmt } from "@/lib/format";

export default function CalculatorSection() {
  const [spend, setSpend] = useState(4200);
  const [tier, setTier] = useState(1);

  const mult = calcTierMults[tier];
  const monthly = spend * mult;
  const yearly = monthly * 12;
  const rounds = Math.floor(yearly / 900);
  const roundsLine = rounds < 1 ? "a range session" : `${rounds} ${rounds === 1 ? "round of 18" : "rounds of 18"}`;

  return (
    <section className="fl-px" style={{ background: "#F6F5F0", color: "#12271F", padding: "140px 40px" }}>
      <div className="fl-split-c" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: 70, alignItems: "center" }}>
        <Reveal>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>the maths</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em" }}>
            What a season is worth.
          </h2>
          <p style={{ margin: "24px 0 0", maxWidth: "40ch", fontSize: 17, fontWeight: 300, lineHeight: 1.62, color: "rgba(18,39,31,.7)" }}>
            Drag your typical month at the club. Baseline is R1 = 1 Flagrr Cash; tier multipliers stack on top.
          </p>
          <div style={{ margin: "36px 0 0", padding: "20px 22px", borderLeft: "2px solid #00805A", fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.72)", maxWidth: "40ch" }}>
            Away-club receipts still earn at baseline — a member’s account travels with them.
          </div>
        </Reveal>

        <Reveal delay={1} style={{ background: "#12271F", color: "#F6F5F0", borderRadius: 24, padding: "44px 40px 40px", boxShadow: "0 40px 80px -40px rgba(18,39,31,.6)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".2em", color: "rgba(246,245,240,.5)", textTransform: "uppercase" }}>monthly club spend</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 30, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>R {fmt(spend)}</span>
          </div>
          <input
            type="range"
            className="fl-range"
            min={500}
            max={20000}
            step={100}
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            aria-label="Monthly club spend"
            style={{ width: "100%", margin: "26px 0 0", height: 26 }}
          />
          <div style={{ display: "flex", gap: 8, margin: "26px 0 0" }}>
            {calcTierNames.map((name, i) => {
              const active = tier === i;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setTier(i)}
                  aria-pressed={active}
                  style={{
                    flex: 1,
                    padding: "12px 6px",
                    borderRadius: 12,
                    border: `1px solid ${active ? "#CDDE5C" : "rgba(246,245,240,.16)"}`,
                    background: active ? "rgba(205,222,92,.16)" : "rgba(246,245,240,.04)",
                    color: active ? "#CDDE5C" : "rgba(246,245,240,.7)",
                    fontFamily: "var(--font-body)",
                    fontSize: 12.5,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all .3s ease",
                  }}
                >
                  {name} <span style={{ opacity: 0.65 }}>×{calcTierMults[i]}</span>
                </button>
              );
            })}
          </div>
          <div style={{ margin: "34px 0 0", padding: "26px 0 0", borderTop: "1px solid rgba(246,245,240,.16)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", color: "rgba(246,245,240,.5)", textTransform: "uppercase" }}>per month</div>
              <div style={{ margin: "10px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1, letterSpacing: "-.03em", color: "#CDDE5C", fontVariantNumeric: "tabular-nums" }}>
                {fmt(monthly)}
              </div>
              <div style={{ margin: "6px 0 0", fontSize: 11.5, color: "rgba(246,245,240,.55)" }}>Flagrr Cash</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", color: "rgba(246,245,240,.5)", textTransform: "uppercase" }}>per season</div>
              <div style={{ margin: "10px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1, letterSpacing: "-.03em", color: "#F6F5F0", fontVariantNumeric: "tabular-nums" }}>
                {fmt(yearly)}
              </div>
              <div style={{ margin: "6px 0 0", fontSize: 11.5, color: "rgba(246,245,240,.55)" }}>≈ {roundsLine}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
