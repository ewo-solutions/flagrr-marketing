import Reveal from "@/components/Reveal";
import { cashFacts } from "@/content/home";

export default function CashFacts() {
  return (
    <section className="fl-px" style={{ background: "#F6F5F0", color: "#12271F", padding: "150px 40px 140px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "60ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>flagrr cash</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(38px,5.2vw,80px)", lineHeight: 0.98, letterSpacing: "-.028em", color: "#12271F" }}>
            One currency. Every club.
          </h2>
          <p style={{ margin: "28px 0 0", fontSize: 19, fontWeight: 300, lineHeight: 1.62, color: "rgba(18,39,31,.72)" }}>
            Flagrr Cash is earned, never bought. It can’t be transferred, sold or cashed out — which is exactly why it holds its meaning. R1 spent earns 1 Flagrr Cash at baseline, and your club can pay richer rates on whatever it wants to move.
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: 1,
            margin: "80px 0 0",
            background: "rgba(18,39,31,.14)",
          }}
        >
          {cashFacts.map((f, i) => (
            <Reveal key={f.label} delay={i} style={{ background: "#F6F5F0", padding: "38px 30px 34px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 44, lineHeight: 1, letterSpacing: "-.03em", color: "#00805A" }}>{f.stat}</div>
              <div style={{ margin: "14px 0 0", fontSize: 14, fontWeight: 500, color: "#12271F" }}>{f.label}</div>
              <div style={{ margin: "8px 0 0", fontSize: 13.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.62)" }}>{f.note}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
