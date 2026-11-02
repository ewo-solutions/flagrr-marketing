import Reveal from "@/components/Reveal";
import { courseMapSteps } from "@/content/clubs";

export default function CourseMapSection() {
  return (
    <section id="course-maps" className="fl-px" style={{ background: "#12271F", color: "#F6F5F0", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "56ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
            new · course maps
          </span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em", color: "#F6F5F0" }}>
            Your course, in every member’s pocket.
          </h2>
          <p style={{ margin: "22px 0 0", fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.74)" }}>
            Send us your scorecard and we map the course. Members get every hole with green distances and a suggested club, a scorecard that keeps Stableford and net as they play, and their own stats. Another reason to open the app at your club.
          </p>
        </Reveal>

        <ol style={{ listStyle: "none", padding: 0, margin: "60px 0 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 }}>
          {courseMapSteps.map((s, i) => {
            const live = i === courseMapSteps.length - 1;
            return (
              <Reveal
                key={s.stage}
                as="li"
                delay={i}
                style={{
                  padding: "26px 24px",
                  borderRadius: 18,
                  background: live ? "#CDDE5C" : "rgba(246,245,240,.05)",
                  border: `1px solid ${live ? "#CDDE5C" : "rgba(246,245,240,.14)"}`,
                  color: live ? "#12271F" : "#F6F5F0",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, lineHeight: 1, color: live ? "#12271F" : "transparent", WebkitTextStroke: live ? undefined : "1.5px rgba(205,222,92,.55)" }}>
                  {i + 1}
                </div>
                <h3 style={{ margin: "18px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21, lineHeight: 1.2, letterSpacing: "-.015em" }}>{s.stage}</h3>
                <p style={{ margin: "9px 0 0", fontSize: 14, fontWeight: live ? 400 : 300, lineHeight: 1.6, color: live ? "rgba(18,39,31,.8)" : "rgba(246,245,240,.68)" }}>{s.body}</p>
              </Reveal>
            );
          })}
        </ol>
        <p style={{ margin: "26px 0 0", maxWidth: "64ch", fontSize: 12.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.5)" }}>
          Your Course map panel shows which stage you’re at. Members see “coming soon” until your map is live. Map data © OpenStreetMap contributors.
        </p>
      </div>
    </section>
  );
}
