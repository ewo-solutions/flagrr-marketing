"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function makeCode() {
  let s = "";
  for (let i = 0; i < 4; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return `FLGR-${s}`;
}

export default function ReferralSection() {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleGenerate() {
    setCode(makeCode());
    setCopied(false);
  }

  async function handleCopy() {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the code is already on screen to copy by hand.
    }
  }

  return (
    <section id="referral" className="fl-px" style={{ background: "#12271F", color: "#F6F5F0", padding: "130px 40px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>is my club on it?</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.8vw,72px)", lineHeight: 0.98, letterSpacing: "-.03em" }}>
            Bring your club onto Flagrr.
          </h2>
          <p style={{ margin: "22px auto 0", maxWidth: "48ch", fontSize: 17, fontWeight: 300, lineHeight: 1.65, color: "rgba(246,245,240,.74)" }}>
            Can’t find your club in the app yet? Generate your unique referral code and pass it on to your pro shop or club manager. The moment your club joins with your code, you get 1 000 Flagrr Cash to spend however you like.
          </p>
        </Reveal>

        <Reveal delay={1} style={{ margin: "44px 0 0" }}>
          {!code ? (
            <button
              type="button"
              onClick={handleGenerate}
              style={{ display: "inline-flex", padding: "17px 32px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", transition: "background .2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#CDDE5C")}
            >
              Generate my referral code
            </button>
          ) : (
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                padding: "28px 40px",
                borderRadius: 22,
                background: "rgba(246,245,240,.06)",
                border: "1px solid rgba(205,222,92,.4)",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(246,245,240,.55)" }}>your referral code</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 34, fontWeight: 600, letterSpacing: ".1em", color: "#CDDE5C" }}>{code}</span>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                <button
                  type="button"
                  onClick={handleCopy}
                  style={{ padding: "11px 22px", borderRadius: 999, background: "#CDDE5C", color: "#12271F", fontSize: 13.5, fontWeight: 600, border: "none", cursor: "pointer" }}
                >
                  {copied ? "Copied" : "Copy code"}
                </button>
                <button
                  type="button"
                  onClick={handleGenerate}
                  style={{ padding: "11px 22px", borderRadius: 999, background: "transparent", border: "1px solid rgba(246,245,240,.3)", color: "#F6F5F0", fontSize: 13.5, cursor: "pointer" }}
                >
                  New code
                </button>
              </div>
            </div>
          )}
        </Reveal>

        <p style={{ margin: "26px 0 0", fontSize: 13.5, fontWeight: 300, color: "rgba(246,245,240,.5)" }}>
          Send it to whoever runs the pro shop — there’s a page on this site written for them too.
        </p>
      </div>
    </section>
  );
}
