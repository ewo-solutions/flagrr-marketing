import Reveal from "@/components/Reveal";
import { tierRows } from "@/content/golfers";

export default function TiersStreaks() {
  return (
    <section className="fl-px" style={{ background: "#1F4234", padding: "120px 40px" }}>
      <div className="fl-split-d" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: 56, alignItems: "center" }}>
        <Reveal>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
            tiers &amp; streaks
          </span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,4.2vw,62px)", lineHeight: 0.99, letterSpacing: "-.028em", color: "#F6F5F0" }}>
            Play more, earn faster.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "40ch", fontSize: 17, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.74)" }}>
            Every tier lifts the rate on every rand. Keep a streak going and it lifts again. Nothing expires while you’re playing.
          </p>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {tierRows.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i}
              style={{ display: "grid", gridTemplateColumns: "1fr auto 96px", gap: 20, alignItems: "center", padding: "24px 26px", borderRadius: 16, background: t.bg, border: `1px solid ${t.border}` }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, letterSpacing: "-.015em", color: t.fg }}>{t.name}</div>
                <div style={{ margin: "4px 0 0", fontSize: 12.5, fontWeight: 300, color: "rgba(246,245,240,.6)" }}>{t.req}</div>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".08em", color: t.fg }}>{t.mult}</div>
              <div style={{ height: 5, borderRadius: 999, background: "rgba(246,245,240,.14)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: t.width, borderRadius: 999, background: t.bar }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
