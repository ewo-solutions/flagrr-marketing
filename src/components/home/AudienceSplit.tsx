"use client";

import { useState } from "react";
import Link from "next/link";

const cards = [
  {
    href: "/clubs",
    tag: "for clubs",
    title: "Retire the punch card.",
    body: "A branded loyalty programme, a reward catalogue you control, member analytics and automatic fraud review. No infrastructure of your own.",
    cta: "Explore the club platform",
  },
  {
    href: "/golfers",
    tag: "for golfers",
    title: "You were spending it anyway.",
    body: "Earn on the pro shop, the halfway house, the green fee. Watch your tier climb. Redeem for things your club actually stocks.",
    cta: "See the member app",
  },
];

export default function AudienceSplit() {
  return (
    <section style={{ position: "relative", background: "#12271F" }}>
      <div className="fl-two-col" style={{ gap: 1, background: "rgba(246,245,240,.12)", borderTop: "1px solid rgba(246,245,240,.12)", borderBottom: "1px solid rgba(246,245,240,.12)" }}>
        {cards.map((c) => (
          <SplitCard key={c.href} {...c} />
        ))}
      </div>
    </section>
  );
}

function SplitCard({ href, tag, title, body, cta }: (typeof cards)[number]) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      className="fl-px"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        position: "relative",
        padding: "76px 40px 64px",
        background: hover ? "#1F4234" : "#12271F",
        overflow: "hidden",
        transition: "background .3s ease",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>{tag}</span>
      <h2 style={{ margin: "22px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(30px,3.4vw,50px)", lineHeight: 1.04, letterSpacing: "-.02em", color: "#F6F5F0", maxWidth: "20ch" }}>
        {title}
      </h2>
      <p style={{ margin: "18px 0 0", maxWidth: "40ch", fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: "rgba(246,245,240,.7)" }}>{body}</p>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 9, margin: "32px 0 0", fontSize: 14, fontWeight: 500, color: "#CDDE5C" }}>
        {cta} <span style={{ fontSize: 17 }}>&#8594;</span>
      </span>
    </Link>
  );
}
