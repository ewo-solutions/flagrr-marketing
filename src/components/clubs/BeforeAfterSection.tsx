import Reveal from "@/components/Reveal";
import { without, withFlagrr } from "@/content/clubs";

export default function BeforeAfterSection() {
  return (
    <section className="fl-px" style={{ background: "#1F4234", color: "#F6F5F0", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "52ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
            what you stop doing
          </span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em", color: "#F6F5F0" }}>
            Before and after the counter.
          </h2>
        </Reveal>
        <div className="fl-two-col" style={{ gap: 1, margin: "60px 0 0", background: "rgba(246,245,240,.16)", border: "1px solid rgba(246,245,240,.16)", borderRadius: 20, overflow: "hidden" }}>
          <div style={{ background: "#1F4234", padding: "36px 32px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".2em", color: "rgba(246,245,240,.45)", textTransform: "uppercase" }}>without flagrr</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "26px 0 0" }}>
              {without.map((w) => (
                <div key={w} style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.55, color: "rgba(246,245,240,.55)", textDecoration: "line-through", textDecorationColor: "rgba(222,92,92,.6)" }}>
                  {w}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#1F4234", padding: "36px 32px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".2em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>with flagrr</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "26px 0 0" }}>
              {withFlagrr.map((w) => (
                <div key={w} style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, color: "#F6F5F0" }}>
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
