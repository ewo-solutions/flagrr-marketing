"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollState } from "@/lib/hooks";
import { statBar } from "@/content/clubs";

export default function ClubsHero() {
  const { y } = useScrollState();
  const shift = y * 0.14;

  return (
    <>
      <header className="fl-px" style={{ position: "relative", padding: "190px 40px 96px", background: "#F6F5F0", overflow: "hidden" }}>
        <div
          className="fl-hide-compact"
          style={{ position: "absolute", right: 0, top: "-10%", width: "52%", height: "130%", overflow: "hidden", transform: `translateY(${shift}px)` }}
        >
          <Image src="/images/strand-golf-club-fairway.jpg" alt="" fill sizes="52vw" style={{ objectFit: "cover" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#F6F5F0 0%,rgba(246,245,240,.65) 22%,rgba(246,245,240,0) 62%)" }} />
        </div>
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>for clubs</span>
          <h1 style={{ margin: "26px 0 0", maxWidth: "17ch", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px,6.4vw,102px)", lineHeight: 0.94, letterSpacing: "-.03em", color: "#12271F" }}>
            Loyalty your members actually use.
          </h1>
          <p style={{ margin: "28px 0 0", maxWidth: "46ch", fontSize: 19, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.72)" }}>
            A branded programme, a catalogue you control, and receipts that rate themselves. You keep the members. Flagrr keeps the plumbing.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "42px 0 0" }}>
            <Link
              href="/clubs/signup"
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
              Sign up your club
            </Link>
            <a
              href="#demo"
              style={{ display: "inline-flex", padding: "17px 30px", borderRadius: 999, border: "1px solid rgba(18,39,31,.25)", color: "#12271F", fontSize: 15, transition: "border-color .2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#12271F")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(18,39,31,.25)")}
            >
              Book a walkthrough
            </a>
          </div>
        </div>
      </header>

      <section className="fl-px" style={{ background: "#12271F", color: "#F6F5F0", padding: "22px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
          {statBar.map((b) => (
            <div key={b.k} style={{ display: "flex", flexDirection: "column", gap: 4, padding: "14px 0" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, letterSpacing: "-.02em", color: "#CDDE5C" }}>{b.v}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".16em", color: "rgba(246,245,240,.5)", textTransform: "uppercase" }}>{b.k}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
