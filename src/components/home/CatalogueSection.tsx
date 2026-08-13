"use client";

import { useRef, useState, useEffect } from "react";
import { rewardCards } from "@/content/home";
import { RewardIcon } from "@/components/icons";
import { useCompactMotion, useScrollState, useSectionProgressRef } from "@/lib/hooks";

const CARD_W = 262;
const GAP = 20;

function RewardCardEl({ r }: { r: (typeof rewardCards)[number] }) {
  return (
    <div style={{ flex: "none", width: CARD_W, borderRadius: 15, border: ".5px solid #00805A", background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 132, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 70% at 50% 35%,rgba(205,222,92,.16),transparent 65%)" }} />
        <RewardIcon kind={r.icon} size={52} color="#CDDE5C" strokeWidth={1.6} style={{ position: "relative", display: "block" }} />
      </div>
      <div style={{ padding: "16px 16px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: ".18em", color: "#00805A", textTransform: "uppercase" }}>{r.cat}</div>
        <div style={{ margin: "9px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, lineHeight: 1.15, letterSpacing: "-.015em", color: "#1F1F1F" }}>{r.title}</div>
        <div style={{ margin: "8px 0 0", fontSize: 12.5, fontWeight: 300, lineHeight: 1.5, color: "#4B5563" }}>{r.desc}</div>
        <div style={{ margin: "14px 0 0", padding: "8px 0 0", borderTop: "1px solid rgba(0,128,90,.18)", fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".1em", color: "rgba(31,31,31,.6)", textTransform: "uppercase" }}>
          {r.from}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="fl-px" style={{ maxWidth: 1180, width: "100%", margin: "0 auto", padding: "0 40px 44px" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>the catalogue</span>
      <h2 style={{ margin: "22px 0 0", maxWidth: "24ch", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,4.4vw,64px)", lineHeight: 0.98, letterSpacing: "-.028em" }}>
        Rounds, range time, lessons.
      </h2>
      <p style={{ margin: "18px 0 0", maxWidth: "48ch", fontSize: 16.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.68)" }}>
        Every club builds its own catalogue and sets its own Flagrr Cash prices. These are the categories members redeem against.
      </p>
    </div>
  );
}

export default function CatalogueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = useScrollState();
  const compact = useCompactMotion();
  const [vw, setVw] = useState(1200);

  useEffect(() => {
    const update = () => setVw(window.innerWidth || 1200);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const progress = useSectionProgressRef(ref, scroll);

  if (compact) {
    return (
      <section id="rewards" style={{ background: "#F6F5F0", color: "#12271F", padding: "100px 0" }}>
        <Header />
        <div className="fl-px" style={{ display: "flex", gap: GAP, overflowX: "auto", paddingBottom: 8, scrollSnapType: "x proximity" }}>
          {rewardCards.map((r) => (
            <div key={r.title} style={{ scrollSnapAlign: "start" }}>
              <RewardCardEl r={r} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  const track = rewardCards.length * (CARD_W + GAP) - vw + 120;
  const shift = -Math.max(0, track) * progress;

  return (
    <section id="rewards" ref={ref} style={{ background: "#F6F5F0", color: "#12271F" }}>
      <div style={{ height: "300vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
          <Header />
          <div className="fl-px" style={{ display: "flex", gap: GAP, transform: `translateX(${shift}px)`, willChange: "transform" }}>
            {rewardCards.map((r) => (
              <RewardCardEl key={r.title} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
