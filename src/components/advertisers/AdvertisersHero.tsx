"use client";

import { statBar } from "@/content/advertisers";
import { PHONE_HREF } from "@/content/contact";

export default function AdvertisersHero() {
  return (
    <>
      <header className="fl-px" style={{ position: "relative", padding: "190px 40px 96px", background: "#12271F", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 60% at 82% 20%, rgba(205,222,92,.16), transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>for advertisers</span>
          <h1 style={{ margin: "26px 0 0", maxWidth: "18ch", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(42px,6.2vw,98px)", lineHeight: 0.94, letterSpacing: "-.03em", color: "#F6F5F0" }}>
            Reach golfers who are already spending.
          </h1>
          <p style={{ margin: "26px 0 0", maxWidth: "46ch", fontSize: 18, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.76)" }}>
            Flagrr sits in a golfer’s pocket at the exact moment they’re thinking about their club — scanning a receipt, checking their balance, picking a reward. Put your brand in that moment, not around it.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "40px 0 0" }}>
            <a
              href={PHONE_HREF}
              style={{ display: "inline-flex", padding: "17px 32px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 15, fontWeight: 600, transition: "background .2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#CDDE5C")}
            >
              Advertise with Flagrr (coming soon)
            </a>
            <a
              href="#formats"
              style={{ display: "inline-flex", padding: "17px 30px", borderRadius: 999, border: "1px solid rgba(246,245,240,.3)", color: "#F6F5F0", fontSize: 15, transition: "border-color .2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F6F5F0")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(246,245,240,.3)")}
            >
              See ad formats
            </a>
          </div>
        </div>
      </header>

      <section className="fl-px" style={{ background: "#0E211A", color: "#F6F5F0", padding: "22px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
          {statBar.map((b) => (
            <div key={b.k} style={{ display: "flex", flexDirection: "column", gap: 4, padding: "14px 0" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, letterSpacing: "-.02em", color: "#CDDE5C" }}>{b.v}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".16em", color: "rgba(246,245,240,.5)", textTransform: "uppercase" }}>{b.k}</span>
            </div>
          ))}
        </div>
        <p style={{ maxWidth: 1180, margin: "18px auto 0", fontSize: 11, color: "rgba(246,245,240,.35)" }}>
          Illustrative figures — Flagrr is early. Real reach numbers replace these as clubs and members come on board.
        </p>
      </section>
    </>
  );
}
