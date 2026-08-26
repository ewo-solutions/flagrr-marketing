"use client";

import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import PhoneScreen from "@/components/PhoneScreen";
import { useCompactMotion, useScrollState } from "@/lib/hooks";

export default function GolfersHero() {
  const { y, h } = useScrollState();
  const compact = useCompactMotion();
  const shift = y * 0.2;
  const deviceScale = compact ? 1 : Math.min(1, (h * 0.68) / 625);

  return (
    <header className="fl-px" style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", padding: "150px 40px 80px", overflow: "hidden" }}>
      <div className="fl-hide-compact" style={{ position: "absolute", inset: "-6% 0", transform: `translateY(${shift}px)` }}>
        <Image src="/images/strand-golf-club-tee.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(100% 80% at 78% 30%,rgba(205,222,92,.14),transparent 58%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(18,39,31,.6),rgba(18,39,31,.2) 45%,rgba(18,39,31,.9))" }} />
      </div>
      <div className="fl-show-compact" style={{ position: "absolute", inset: 0, background: "#12271F" }} />

      <div className="fl-split-d" style={{ position: "relative", maxWidth: 1180, margin: "0 auto", width: "100%", display: "grid", gap: 50, alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
            for golfers · free forever
          </span>
          <h1 style={{ margin: "26px 0 0", maxWidth: "16ch", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px,6.2vw,98px)", lineHeight: 0.94, letterSpacing: "-.03em", color: "#F6F5F0" }}>
            Get something back for playing.
          </h1>
          <p style={{ margin: "26px 0 0", maxWidth: "44ch", fontSize: 18, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.76)" }}>
            Scan the receipt you were going to bin. Earn Flagrr Cash on it. Spend it on rewards your club actually stocks.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "40px 0 0" }}>
            <a
              href="#get"
              style={{ display: "inline-flex", padding: "17px 32px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 15, fontWeight: 600, transition: "background .2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#CDDE5C")}
            >
              Get the app
            </a>
            <a
              href="#referral"
              style={{ display: "inline-flex", padding: "17px 30px", borderRadius: 999, border: "1px solid rgba(246,245,240,.3)", color: "#F6F5F0", fontSize: 15, transition: "border-color .2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F6F5F0")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(246,245,240,.3)")}
            >
              Is my club on it?
            </a>
          </div>
        </div>
        <div className="fl-hide-compact fl-drift" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <PhoneFrame width={288} scale={deviceScale}>
            <PhoneScreen screen={1} />
          </PhoneFrame>
        </div>
      </div>
    </header>
  );
}
