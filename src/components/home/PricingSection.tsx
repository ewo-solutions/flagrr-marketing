"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { plan } from "@/content/home";

export default function PricingSection() {
  return (
    <section id="pricing" className="fl-px" style={{ background: "#F6F5F0", color: "#12271F", padding: "140px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "56ch", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>pricing</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,4.8vw,74px)", lineHeight: 0.98, letterSpacing: "-.028em" }}>
            One plan. Everything in it.
          </h2>
          <p style={{ margin: "22px 0 0", fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.7)" }}>
            No tiers to compare and no feature held back. Members never pay a cent — clubs subscribe monthly and cancel whenever they like.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,460px)", justifyContent: "center", gap: 20, margin: "64px 0 0", alignItems: "stretch" }}>
          <Reveal
            delay={1}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "38px 32px 34px",
              borderRadius: 22,
              background: "#12271F",
              color: "#F6F5F0",
              border: "1px solid rgba(205,222,92,.5)",
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", opacity: 0.6 }}>{plan.name}</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, margin: "20px 0 0", padding: "7px 13px", borderRadius: 999, background: "rgba(205,222,92,.14)", border: "1px solid rgba(205,222,92,.5)", width: "fit-content" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#CDDE5C" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", textTransform: "uppercase", color: "#CDDE5C" }}>{plan.badge}</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 14, margin: "18px 0 0", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 58, lineHeight: 0.88, letterSpacing: "-.035em", fontVariantNumeric: "tabular-nums", color: "#CDDE5C" }}>{plan.price}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 5 }}>
                <span style={{ fontSize: 13, opacity: 0.62 }}>{plan.per}</span>
                <span style={{ fontSize: 14, opacity: 0.45, textDecoration: "line-through", fontVariantNumeric: "tabular-nums" }}>{plan.priceWas}</span>
              </div>
            </div>
            <p style={{ margin: "16px 0 0", fontSize: 13, fontWeight: 300, lineHeight: 1.55, opacity: 0.68 }}>{plan.saleNote}</p>
            <p style={{ margin: "14px 0 26px", fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, opacity: 0.75 }}>{plan.blurb}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, margin: "0 0 30px" }}>
              {plan.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14, fontWeight: 300, lineHeight: 1.5 }}>
                  <span style={{ color: "#CDDE5C", fontSize: 13, paddingTop: 1 }}>&#9679;</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                href="/clubs/signup"
                style={{ display: "block", textAlign: "center", padding: "14px 20px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 14, fontWeight: 600, transition: "opacity .2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {plan.cta}
              </Link>
              <a
                href="#download"
                style={{ display: "block", textAlign: "center", fontSize: 13, fontWeight: 300, color: "rgba(246,245,240,.6)", transition: "color .2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F6F5F0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(246,245,240,.6)")}
              >
                Prefer a walkthrough first? &#8594;
              </a>
            </div>
          </Reveal>
        </div>
        <p style={{ margin: "30px 0 0", textAlign: "center", fontSize: 13.5, fontWeight: 300, color: "rgba(18,39,31,.55)" }}>
          Excludes VAT. No setup fee, no per-member charge.
        </p>
      </div>
    </section>
  );
}
