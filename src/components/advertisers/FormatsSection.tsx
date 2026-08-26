"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { adFormats } from "@/content/advertisers";

function FormatCard({ f, delay }: { f: (typeof adFormats)[number]; delay: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal
      delay={delay}
      style={{
        padding: "32px 28px",
        borderRadius: 20,
        background: "#FFFFFF",
        border: "1px solid rgba(18,39,31,.1)",
        transform: hover ? "translateY(-6px)" : undefined,
        boxShadow: hover ? "0 24px 48px -24px rgba(18,39,31,.3)" : undefined,
        transition: "transform .4s ease, box-shadow .4s ease",
      }}
    >
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".18em", color: "#00805A", textTransform: "uppercase" }}>{f.tag}</div>
        <h3 style={{ margin: "16px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, lineHeight: 1.2, letterSpacing: "-.015em" }}>{f.title}</h3>
        <p style={{ margin: "11px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.68)" }}>{f.body}</p>
      </div>
    </Reveal>
  );
}

export default function FormatsSection() {
  return (
    <section id="formats" className="fl-px" style={{ background: "#F6F5F0", color: "#12271F", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "54ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>ad formats</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em" }}>
            Four places to show up.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20, margin: "60px 0 0" }}>
          {adFormats.map((f, i) => (
            <FormatCard key={f.tag} f={f} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
