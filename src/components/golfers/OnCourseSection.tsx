import Reveal from "@/components/Reveal";
import PhoneFrame from "@/components/PhoneFrame";
import PhoneScreen from "@/components/PhoneScreen";
import { onCourse } from "@/content/golfers";

export default function OnCourseSection() {
  return (
    <section id="course" className="fl-px" style={{ background: "#1F4234", color: "#F6F5F0", padding: "130px 40px", overflow: "hidden" }}>
      <div className="fl-split-d" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: 56, alignItems: "center" }}>
        <div>
          <Reveal>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
              new · course &amp; my golf
            </span>
            <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em", color: "#F6F5F0" }}>
              Take it out on the course.
            </h2>
            <p style={{ margin: "22px 0 0", maxWidth: "44ch", fontSize: 17, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.74)" }}>
              Two new tabs in the same app. Course shows you the hole and keeps your card. My Golf turns your rounds into numbers worth reading at the 19th.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, margin: "44px 0 0" }}>
            {onCourse.map((c, i) => (
              <Reveal key={c.tag} delay={i} style={{ padding: "24px 22px", borderRadius: 18, background: "rgba(246,245,240,.05)", border: "1px solid rgba(246,245,240,.14)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", color: "#CDDE5C", textTransform: "uppercase" }}>{c.tag}</div>
                <h3 style={{ margin: "12px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.2, letterSpacing: "-.015em" }}>{c.title}</h3>
                <p style={{ margin: "9px 0 0", fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.7)" }}>{c.body}</p>
              </Reveal>
            ))}
          </div>
          <p style={{ margin: "26px 0 0", maxWidth: "60ch", fontSize: 12.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.55)" }}>
            On courses Flagrr has mapped, home or away. Clubs go live as their maps are built. GPS tracking is coming soon. Flagrr never calculates your Handicap Index; that stays with GolfRSA. Screens shown with sample data.
          </p>
        </div>
        <Reveal delay={1} style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 560 }}>
          <div className="fl-hide-compact" style={{ position: "absolute", left: "4%", top: 40, transform: "rotate(-5deg)", opacity: 0.92 }}>
            <PhoneFrame width={236}>
              <PhoneScreen screen={9} />
            </PhoneFrame>
          </div>
          <div style={{ position: "relative", transform: "translateX(18%) rotate(3deg)" }} className="fl-oncourse-front">
            <PhoneFrame width={260}>
              <PhoneScreen screen={8} />
            </PhoneFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
