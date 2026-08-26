"use client";

import { FlagrrIcon } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { PHONE_HREF } from "@/content/contact";

export default function DemoSection() {
  return (
    <section id="demo" className="fl-px" style={{ background: "#F6F5F0", padding: "140px 40px 120px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <FlagrrIcon color="clubgreen" height={56} style={{ margin: "0 auto 30px" }} />
        <Reveal as="h2" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,5.4vw,82px)", lineHeight: 0.96, letterSpacing: "-.03em", color: "#12271F" }}>
          Bring it to your club.
        </Reveal>
        <Reveal delay={1} as="p" style={{ margin: "24px auto 0", maxWidth: "44ch", fontSize: 18, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.7)" }}>
          Thirty minutes, your catalogue on screen, and a straight answer on what it costs.
        </Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, margin: "40px 0 0" }}>
          <a
            href={PHONE_HREF}
            style={{ display: "inline-flex", padding: "17px 32px", borderRadius: 999, background: "#12271F", color: "#F6F5F0", fontSize: 15, fontWeight: 600, transition: "background .2s ease, color .2s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00805A";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#12271F";
              e.currentTarget.style.color = "#F6F5F0";
            }}
          >
            Sign up your club (coming soon)
          </a>
          <a
            href="#"
            style={{ display: "inline-flex", padding: "17px 30px", borderRadius: 999, border: "1px solid rgba(18,39,31,.25)", color: "#12271F", fontSize: 15, transition: "border-color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#12271F")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(18,39,31,.25)")}
          >
            Book a walkthrough
          </a>
        </div>

        <Reveal
          delay={2}
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "44px 0 0",
            padding: "32px 44px 28px",
            borderRadius: 24,
            background: "#12271F",
            color: "#F6F5F0",
            boxShadow: "0 40px 80px -44px rgba(18,39,31,.55)",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 13px", borderRadius: 999, background: "rgba(205,222,92,.14)", border: "1px solid rgba(205,222,92,.5)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#CDDE5C" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", textTransform: "uppercase", color: "#CDDE5C" }}>early club special · first month</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 14, margin: "22px 0 0" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 64, lineHeight: 0.86, letterSpacing: "-.035em", color: "#CDDE5C", fontVariantNumeric: "tabular-nums" }}>R2 500</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 6, textAlign: "left" }}>
              <span style={{ fontSize: 13, color: "rgba(246,245,240,.62)" }}>/ month ex VAT</span>
              <span style={{ fontSize: 14, color: "rgba(246,245,240,.45)", textDecoration: "line-through", fontVariantNumeric: "tabular-nums" }}>R5 250</span>
            </div>
          </div>
          <p style={{ margin: "18px 0 0", maxWidth: "40ch", fontSize: 13.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.7)" }}>
            R2 500 for your first month as an early joining club, then R5 250 / month ex VAT. Unlimited members, every feature.
          </p>
          <a
            href={PHONE_HREF}
            style={{ marginTop: 22, display: "block", textAlign: "center", padding: "13px 32px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 14, fontWeight: 600, transition: "opacity .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Sign up your club (coming soon)
          </a>
        </Reveal>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, margin: "34px 0 0", padding: "22px 26px", borderRadius: 16, background: "#CCF2E6", border: ".5px solid #00805A", textAlign: "left", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", color: "#00805A", textTransform: "uppercase", width: "100%" }}>priority support, included</div>
          <div style={{ fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.78)" }}>
            Every club on Flagrr gets priority support by phone and email — a real person, not a form.
          </div>
        </div>

        <p style={{ margin: "22px 0 0", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", color: "rgba(18,39,31,.42)", textTransform: "uppercase" }}>
          south africa · unlimited members · every feature included
        </p>
      </div>
    </section>
  );
}
