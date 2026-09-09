"use client";

import Link from "next/link";
import { FlagrrIcon } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { PLAY_STORE_URL } from "@/content/contact";

export default function DownloadSection() {
  return (
    <section id="download" className="fl-px" style={{ position: "relative", background: "#12271F", padding: "160px 40px 130px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 70% at 50% 110%,rgba(205,222,92,.2),transparent 60%)" }} />
      <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <FlagrrIcon color="lime" height={62} style={{ margin: "0 auto 34px", opacity: 0.9 }} />
        <Reveal as="h2" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px,6.2vw,94px)", lineHeight: 0.95, letterSpacing: "-.03em", color: "#F6F5F0" }}>
          Play. Earn.<br />Redeem. Repeat.
        </Reveal>
        <Reveal delay={1} as="p" style={{ margin: "28px auto 0", maxWidth: "46ch", fontSize: 18, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.74)" }}>
          Free for golfers, forever. Can’t find your club in the app? Get your unique referral code and ask them to join — if they do, you get 1 000 Flagrr Cash to spend however you like.
        </Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, margin: "44px 0 0" }}>
          <span
            aria-disabled="true"
            style={{ display: "inline-flex", alignItems: "center", gap: 11, padding: "17px 30px", borderRadius: 999, background: "rgba(205,222,92,.35)", color: "rgba(18,39,31,.65)", fontSize: 15, fontWeight: 600, cursor: "not-allowed" }}
          >
            Download for iOS (coming soon)
          </span>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 11, padding: "17px 30px", borderRadius: 999, background: "rgba(246,245,240,.08)", border: "1px solid rgba(246,245,240,.28)", color: "#F6F5F0", fontSize: 15, fontWeight: 500, transition: "border-color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F6F5F0")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(246,245,240,.28)")}
          >
            Download for Android
          </a>
          <Link
            href="/golfers#referral"
            style={{ display: "inline-flex", alignItems: "center", gap: 11, padding: "17px 30px", borderRadius: 999, border: "1px solid transparent", color: "rgba(246,245,240,.72)", fontSize: 15, fontWeight: 400, transition: "color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F6F5F0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(246,245,240,.72)")}
          >
            Get my referral code &#8594;
          </Link>
          <Link
            href="/clubs"
            style={{ display: "inline-flex", alignItems: "center", gap: 11, padding: "17px 30px", borderRadius: 999, border: "1px solid transparent", color: "rgba(246,245,240,.72)", fontSize: 15, fontWeight: 400, transition: "color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F6F5F0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(246,245,240,.72)")}
          >
            I run a club &#8594;
          </Link>
        </div>
      </div>
    </section>
  );
}
