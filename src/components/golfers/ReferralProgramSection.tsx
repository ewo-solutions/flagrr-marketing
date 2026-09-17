import Reveal from "@/components/Reveal";
import { referralWays } from "@/content/golfers";

export default function ReferralProgramSection() {
  return (
    <section id="referral" className="fl-px" style={{ background: "#12271F", color: "#F6F5F0", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "56ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>refer &amp; earn</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em" }}>
            Two ways to earn more.
          </h2>
          <p style={{ margin: "22px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.72)" }}>
            Every member gets one referral code in the app. Share it, and you earn Flagrr Cash whichever way it gets used.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, margin: "56px 0 0" }}>
          {referralWays.map((w, i) => (
            <Reveal
              key={w.tag}
              delay={i}
              style={{ padding: "30px 28px", borderRadius: 20, background: "rgba(246,245,240,.04)", border: "1px solid rgba(246,245,240,.14)" }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>{w.tag}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, margin: "16px 0 0" }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, letterSpacing: "-.015em" }}>{w.title}</h3>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "#CDDE5C" }}>{w.amount}</span>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.72)" }}>{w.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} style={{ margin: "36px 0 0" }}>
          <p style={{ margin: 0, maxWidth: "64ch", fontSize: 13.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.5)" }}>
            Find your code in the app under Profile → Refer a Friend. Up to 10 referral bonuses per member, combined across friends and clubs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
