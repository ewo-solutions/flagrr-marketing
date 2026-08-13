"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { clubCards } from "@/content/home";

function ClubCard({ c, delay }: { c: (typeof clubCards)[number]; delay: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal
      delay={delay}
      style={{
        padding: "34px 30px 32px",
        borderRadius: 20,
        background: hover ? "rgba(246,245,240,.09)" : "rgba(246,245,240,.05)",
        border: "1px solid rgba(246,245,240,.11)",
        transform: hover ? "translateY(-6px)" : undefined,
        transition: "transform .4s ease, background .4s ease",
      }}
    >
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", color: "rgba(205,222,92,.8)", textTransform: "uppercase" }}>{c.tag}</div>
        <h3 style={{ margin: "18px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 23, lineHeight: 1.2, letterSpacing: "-.015em", color: "#F6F5F0" }}>{c.title}</h3>
        <p style={{ margin: "12px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.68)" }}>{c.body}</p>
      </div>
    </Reveal>
  );
}

export default function ClubValueProps() {
  return (
    <section className="fl-px" style={{ background: "#1F4234", padding: "140px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 30 }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>for clubs</span>
            <h2 style={{ margin: "24px 0 0", maxWidth: "22ch", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,4.6vw,70px)", lineHeight: 0.98, letterSpacing: "-.028em", color: "#F6F5F0" }}>
              Runs itself at the counter.
            </h2>
          </div>
          <Link
            href="/clubs"
            style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "15px 28px", borderRadius: 999, border: "1px solid rgba(246,245,240,.3)", color: "#F6F5F0", fontSize: 14, transition: "color .2s ease, border-color .2s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CDDE5C";
              e.currentTarget.style.color = "#CDDE5C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(246,245,240,.3)";
              e.currentTarget.style.color = "#F6F5F0";
            }}
          >
            The club platform <span style={{ fontSize: 16 }}>&#8594;</span>
          </Link>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(268px,1fr))", gap: 20, margin: "66px 0 0" }}>
          {clubCards.map((c, i) => (
            <ClubCard key={c.tag} c={c} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
