"use client";

import Link from "next/link";
import { FlagrrLogo } from "@/components/Logo";
import Reveal from "@/components/Reveal";

export default function GetAppSection() {
  return (
    <section id="get" className="fl-px" style={{ position: "relative", background: "#12271F", padding: "150px 40px 120px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 70% at 50% 115%,rgba(205,222,92,.2),transparent 60%)" }} />
      <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <FlagrrLogo color="lime" height={74} style={{ margin: "0 auto 34px" }} />
        <Reveal as="h2" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,5.6vw,86px)", lineHeight: 0.96, letterSpacing: "-.03em", color: "#F6F5F0" }}>
          Free. Now and later.
        </Reveal>
        <Reveal delay={1} as="p" style={{ margin: "24px auto 0", maxWidth: "44ch", fontSize: 18, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.74)" }}>
          Members never pay for Flagrr. If your club isn’t on it yet, tell them — it takes them thirty minutes.
        </Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, margin: "40px 0 0" }}>
          <a
            href="#"
            style={{ display: "inline-flex", padding: "17px 30px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 15, fontWeight: 600, transition: "background .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#CDDE5C")}
          >
            Download for iOS
          </a>
          <a
            href="#"
            style={{ display: "inline-flex", padding: "17px 30px", borderRadius: 999, background: "rgba(246,245,240,.08)", border: "1px solid rgba(246,245,240,.28)", color: "#F6F5F0", fontSize: 15, fontWeight: 500, transition: "border-color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F6F5F0")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(246,245,240,.28)")}
          >
            Download for Android
          </a>
          <Link
            href="/clubs"
            style={{ display: "inline-flex", padding: "17px 26px", borderRadius: 999, color: "rgba(246,245,240,.72)", fontSize: 15, transition: "color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F6F5F0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(246,245,240,.72)")}
          >
            Tell my club &#8594;
          </Link>
        </div>
      </div>
    </section>
  );
}
