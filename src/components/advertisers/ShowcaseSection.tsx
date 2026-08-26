"use client";

import PhoneFrame from "@/components/PhoneFrame";
import PhoneScreen from "@/components/PhoneScreen";
import Reveal from "@/components/Reveal";

export default function ShowcaseSection() {
  return (
    <section className="fl-px" style={{ background: "#1F4234", color: "#F6F5F0", padding: "130px 40px" }}>
      <div className="fl-split-b" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: 48, alignItems: "center" }}>
        <Reveal>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
            home screen banner
          </span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 1, letterSpacing: "-.026em", color: "#F6F5F0" }}>
            Native to the app, not bolted on.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "44ch", fontSize: 16, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.72)" }}>
            The banner slot sits between a golfer’s Flagrr Cash balance and their streak — styled to match the app, clearly labelled as an ad, and never in the way of a redemption.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "28px 0 0" }}>
            {[
              "Full-width card, one per session",
              "Clearly labelled — golfers always know it’s an ad",
              "Links straight to a landing page, a reward or a phone number",
            ].map((c) => (
              <div key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14.5, fontWeight: 300, lineHeight: 1.5, color: "rgba(246,245,240,.78)" }}>
                <span style={{ color: "#CDDE5C", paddingTop: 2, fontSize: 11 }}>&#9679;</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="fl-hide-compact" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <PhoneFrame width={280}>
            <PhoneScreen screen={7} />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
