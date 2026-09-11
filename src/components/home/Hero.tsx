"use client";

import Image from "next/image";
import { FlagrrLogo } from "@/components/Logo";
import { useScrollState } from "@/lib/hooks";

const words: { text: string; delay: number }[] = [
  { text: "The", delay: 0.05 },
  { text: "round", delay: 0.14 },
  { text: "pays", delay: 0.23 },
  { text: "you", delay: 0.32 },
  { text: "back.", delay: 0.41 },
];

export default function Hero() {
  const { y, h } = useScrollState();
  const heroShift = Math.min(h, y) * 0.28;

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "132px 0 0",
        overflow: "hidden",
        background: "#12271F",
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "-8% 0", transform: `translateY(${heroShift}px)` }}>
          <Image
            src="/images/strand-golf-club-sunset-swing.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(120% 80% at 72% 18%,rgba(205,222,92,.14),transparent 58%),radial-gradient(90% 70% at 20% 90%,rgba(31,66,52,.5),transparent 62%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(18,39,31,.72) 0%,rgba(18,39,31,.25) 38%,rgba(18,39,31,.92) 88%,#12271F 100%)",
          }}
        />
      </div>

      <div className="fl-px" style={{ position: "relative", padding: "0 40px 72px", maxWidth: 1400, width: "100%", margin: "0 auto" }}>
        <FlagrrLogo color="white" height={86} style={{ margin: "0 0 40px", opacity: 0.96 }} priority />
        <h1
          style={{
            margin: 0,
            maxWidth: "15ch",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(46px,7.4vw,116px)",
            lineHeight: 0.93,
            letterSpacing: "-.025em",
            color: "#F6F5F0",
            textWrap: "balance",
          }}
        >
          {words.map((w) => (
            <span key={w.text} className="fl-w" style={{ marginRight: "0.22em" }}>
              <span style={{ animationDelay: `${w.delay}s` }}>{w.text}</span>
            </span>
          ))}
        </h1>
        <p style={{ margin: "30px 0 0", maxWidth: "52ch", fontSize: 19, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.78)" }}>
          Flagrr turns what members already spend at your club into a loyalty programme worth belonging to. Scan a receipt. Earn Flagrr Cash. Redeem it at the club.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, margin: "44px 0 0" }}>
          <a
            href="#download"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 32px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 15, fontWeight: 600, transition: "background .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#CDDE5C")}
          >
            Get the app
          </a>
          <a
            href="#loop"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 30px", borderRadius: 999, border: "1px solid rgba(246,245,240,.3)", color: "#F6F5F0", fontSize: 15, fontWeight: 400, transition: "border-color .2s ease, background .2s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#F6F5F0";
              e.currentTarget.style.background = "rgba(246,245,240,.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(246,245,240,.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            See how it works
          </a>
          <span style={{ marginLeft: 8, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 17, color: "rgba(205,222,92,.9)" }}>
            Play. Earn. Redeem. Repeat.
          </span>
        </div>
      </div>
      <div className="fl-hint" style={{ position: "relative", display: "flex", justifyContent: "center", padding: "0 0 26px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".22em", color: "rgba(246,245,240,.55)", textTransform: "uppercase" }}>
          scroll
        </span>
      </div>
    </section>
  );
}
