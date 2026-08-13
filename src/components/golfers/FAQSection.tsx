"use client";

import { useState } from "react";
import { faqs } from "@/content/golfers";

function FAQRow({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(18,39,31,.16)" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "26px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 20,
          letterSpacing: "-.01em",
          color: "#12271F",
        }}
      >
        <span>{q}</span>
        <span style={{ flex: "none", fontSize: 20, color: "#00805A", transform: `rotate(${open ? 45 : 0}deg)`, transition: "transform .35s ease" }}>+</span>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 340 : 0, opacity: open ? 1 : 0, transition: "max-height .45s cubic-bezier(.22,1,.36,1), opacity .35s ease" }}>
        <p style={{ margin: 0, padding: "0 0 26px", maxWidth: "62ch", fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: "rgba(18,39,31,.7)" }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="fl-px" style={{ background: "#F6F5F0", color: "#12271F", padding: "130px 40px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,4.4vw,64px)", lineHeight: 0.99, letterSpacing: "-.028em" }}>
          Straight answers.
        </h2>
        <div style={{ margin: "52px 0 0", borderTop: "1px solid rgba(18,39,31,.16)" }}>
          {faqs.map((f, i) => (
            <FAQRow key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
