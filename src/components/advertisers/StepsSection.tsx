import Reveal from "@/components/Reveal";
import { steps } from "@/content/advertisers";

export default function StepsSection() {
  return (
    <section className="fl-px" style={{ background: "#F6F5F0", color: "#12271F", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "52ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>how it works</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em" }}>
            Brief. Build. Run. Report.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 1, margin: "60px 0 0", background: "rgba(18,39,31,.12)", border: "1px solid rgba(18,39,31,.12)", borderRadius: 20, overflow: "hidden" }}>
          {steps.map((s, i) => (
            <Reveal key={s.name} delay={i} style={{ background: "#F6F5F0", padding: "32px 28px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", color: "rgba(18,39,31,.4)" }}>{"0" + (i + 1)}</span>
              <h3 style={{ margin: "16px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21, lineHeight: 1.2, letterSpacing: "-.015em" }}>{s.title}</h3>
              <p style={{ margin: "11px 0 0", fontSize: 14, fontWeight: 300, lineHeight: 1.58, color: "rgba(18,39,31,.68)" }}>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
