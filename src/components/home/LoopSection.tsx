"use client";

import { useRef } from "react";
import { FlagrrIcon } from "@/components/Logo";
import { loopSteps } from "@/content/home";
import { fmt } from "@/lib/format";
import { qrPath } from "@/lib/qr";
import { useCompactMotion, useScrollState, useSectionProgressRef } from "@/lib/hooks";
import { IconChevronBack, IconFlashOff, IconGallery, IconScanCorners } from "@/components/icons";

const STEP_COUNT = 4;

export default function LoopSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = useScrollState();
  const compact = useCompactMotion();

  const progress = useSectionProgressRef(ref, scroll);
  const raw = progress * STEP_COUNT;
  const idx = Math.min(STEP_COUNT - 1, Math.floor(raw));
  const local = Math.min(1, Math.max(0, raw - idx));

  const auraX = 30 + idx * 14;
  const deviceTilt = -8 + local * 16;
  const deviceScale = Math.min(1, (scroll.h * 0.8) / 672);
  const deviceBoxH = Math.round(Math.min(672, scroll.h * 0.8));
  const earnCount = fmt(idx >= 2 ? 12460 + (idx === 2 ? local : 1) * 1860 : 12460);

  if (compact) {
    return (
      <section id="loop" style={{ background: "#12271F" }}>
        <div className="fl-px" style={{ maxWidth: 1300, margin: "0 auto", padding: "100px 40px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
            the loop
          </span>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,8vw,56px)", lineHeight: 0.97, letterSpacing: "-.03em", color: "#F6F5F0" }}>
            Spend. Scan. Earn. Redeem.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 56, margin: "56px 0 0" }}>
            {loopSteps.map((s, i) => (
              <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "rgba(246,245,240,.4)" }}>0{i + 1} / 04</span>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "#F6F5F0" }}>{s.title}</h3>
                </div>
                <p style={{ margin: 0, maxWidth: "48ch", fontSize: 16, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.76)" }}>{s.body}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <LoopDevice idx={i} tilt={0} scale={1} boxH={672} earnCount={fmt(i >= 2 ? 14320 : 12460)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="loop" ref={ref} style={{ position: "relative", background: "#12271F" }}>
      <div style={{ height: "420vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(70% 60% at ${auraX}% 50%, rgba(0,128,90,.3), transparent 62%)`,
            }}
          />
          <div className="fl-px fl-split-a" style={{ position: "relative", width: "100%", maxWidth: 1300, margin: "0 auto", display: "grid", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "rgba(205,222,92,.85)", textTransform: "uppercase" }}>
                the loop
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, margin: "26px 0 0" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 20, color: "rgba(246,245,240,.4)", fontVariantNumeric: "tabular-nums" }}>
                  {"0" + (idx + 1) + " / 04"}
                </span>
                <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px,5.6vw,86px)", lineHeight: 0.95, letterSpacing: "-.03em", color: "#F6F5F0" }}>
                  {loopSteps[idx].title}
                </h2>
              </div>
              <p style={{ margin: "26px 0 0", maxWidth: "44ch", minHeight: "5.2em", fontSize: 18, fontWeight: 300, lineHeight: 1.62, color: "rgba(246,245,240,.76)" }}>
                {loopSteps[idx].body}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, margin: "46px 0 0", maxWidth: 420 }}>
                {loopSteps.map((s, i) => {
                  const active = i === idx;
                  const fill = i < idx ? 1 : i === idx ? local : 0;
                  return (
                    <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderTop: "1px solid rgba(246,245,240,.14)" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", color: active ? "#CDDE5C" : "rgba(246,245,240,.32)", width: 22 }}>
                        {"0" + (i + 1)}
                      </span>
                      <span style={{ flex: 1, fontSize: 14.5, fontWeight: 500, color: active ? "#F6F5F0" : "rgba(246,245,240,.42)", transition: "color .4s ease" }}>
                        {s.name}
                      </span>
                      <span style={{ width: 74, height: 2, background: "rgba(246,245,240,.16)", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", background: "#CDDE5C", transformOrigin: "left center", transform: `scaleX(${fill})` }} />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: deviceBoxH }}>
              <LoopDevice idx={idx} tilt={deviceTilt} scale={deviceScale} boxH={672} earnCount={earnCount} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LoopDevice({
  idx,
  tilt,
  scale,
  boxH,
  earnCount,
}: {
  idx: number;
  tilt: number;
  scale: number;
  boxH: number;
  earnCount: string;
}) {
  const op = (i: number) => (i === idx ? 1 : 0);
  const sc = (i: number) => (i === idx ? 1 : 0.94);
  const voucherD = qrPath("FLGR-8T4K");

  return (
    <div
      style={{
        position: "relative",
        width: 330,
        height: Math.min(672, boxH),
        flex: "none",
        borderRadius: 52,
        background: "linear-gradient(160deg,#2C4C3E,#0E211A)",
        padding: 12,
        boxShadow: "0 60px 120px -30px rgba(0,0,0,.75), 0 0 0 1px rgba(246,245,240,.14)",
        transformOrigin: "center center",
        transform: `scale(${scale}) rotateY(${tilt}deg) rotateX(2deg)`,
        transformStyle: "preserve-3d",
        transition: "transform .5s ease",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 42, background: "#0B1A14", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 8, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 26px 0", fontSize: 11, fontWeight: 500, color: "rgba(246,245,240,.85)" }}>
          <span>9:41</span>
          <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <span style={{ width: 16, height: 8, border: "1px solid rgba(246,245,240,.6)", borderRadius: 2 }} />
          </span>
        </div>
        <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", width: 104, height: 26, borderRadius: 999, background: "#0B1A14", zIndex: 9 }} />

        {/* Step 1 — Spend: today's till receipt */}
        <div style={{ position: "absolute", inset: 0, padding: "58px 22px 22px", opacity: op(0), transform: `scale(${sc(0)})`, transition: "opacity .45s ease, transform .45s ease" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".2em", color: "rgba(246,245,240,.42)", textTransform: "uppercase" }}>today at the club</div>
          <div style={{ margin: "18px 0 0", borderRadius: 18, background: "#F6F5F0", color: "#12271F", padding: "20px 18px", boxShadow: "0 20px 40px -18px rgba(0,0,0,.6)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16 }}>Strand Golf Club</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "rgba(18,39,31,.5)", margin: "4px 0 14px" }}>TILL 02 · TXN 40118 · 14:22</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 11.5 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>Titleist Pro V1 Golf Balls</span><span style={{ fontVariantNumeric: "tabular-nums" }}>R 899.00</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>FootJoy Glove</span><span style={{ fontVariantNumeric: "tabular-nums" }}>R 341.00</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 11, borderTop: "1px dashed rgba(18,39,31,.28)", fontWeight: 600 }}><span>Total</span><span style={{ fontVariantNumeric: "tabular-nums" }}>R 1 240.00</span></div>
            </div>
          </div>
          <div style={{ margin: "22px 0 0", textAlign: "center", fontSize: 12, fontWeight: 300, color: "rgba(246,245,240,.6)" }}>Spend you were making anyway.</div>
        </div>

        {/* Step 2 — Scan */}
        <div style={{ position: "absolute", inset: 0, background: "#1F4234", display: "flex", flexDirection: "column", opacity: op(1), transform: `scale(${sc(1)})`, transition: "opacity .45s ease, transform .45s ease", overflow: "hidden" }}>
          <div style={{ flex: "none", background: "#00805A", padding: "44px 20px 0" }}>
            <div style={{ height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <IconChevronBack size={22} color="#FFFFFF" strokeWidth={2} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#FFFFFF" }}>Scan Receipt</span>
              <IconFlashOff size={20} color="#FFFFFF" strokeWidth={1.7} />
            </div>
          </div>
          <div style={{ flex: 1, position: "relative", background: "#12271F", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 50% 30%,#20342B,#0A140F)" }} />
            <div style={{ position: "absolute", left: "16%", right: "16%", top: "19%", bottom: "19%", background: "#EDEBE4", borderRadius: 3, transform: "rotate(-1.4deg)", boxShadow: "0 18px 34px -12px rgba(0,0,0,.7)", padding: "16px 14px", overflow: "hidden" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11.5, color: "#1F1F1F", textAlign: "center" }}>STRAND GOLF CLUB</div>
              <div style={{ margin: "3px 0 10px", fontFamily: "var(--font-mono)", fontSize: 6.5, letterSpacing: ".1em", color: "#6B7280", textAlign: "center" }}>PRO SHOP · TILL 02 · TXN 40118</div>
              <div style={{ borderTop: "1px dashed rgba(31,31,31,.35)", padding: "8px 0 0", display: "flex", flexDirection: "column", gap: 5, fontFamily: "var(--font-mono)", fontSize: 7, color: "#1F1F1F" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>TITLEIST PRO V1</span><span>899.00</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>FOOTJOY GLOVE</span><span>341.00</span></div>
              </div>
              <div style={{ margin: "8px 0 0", borderTop: "1px dashed rgba(31,31,31,.35)", padding: "8px 0 0", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 8, fontWeight: 600, color: "#1F1F1F" }}><span>TOTAL</span><span>R1240.00</span></div>
              <div style={{ margin: "10px 0 0", fontFamily: "var(--font-mono)", fontSize: 6, letterSpacing: ".08em", color: "#9CA3AF", textAlign: "center" }}>30 JUL 2026 · 14:22 · THANK YOU</div>
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,20,15,.5),rgba(10,20,15,.2) 40%,rgba(10,20,15,.55))" }} />
            <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", padding: "7px 16px", borderRadius: 44, background: "rgba(0,0,0,.4)", fontSize: 11, fontWeight: 500, color: "#FFFFFF", whiteSpace: "nowrap" }}>
              Align receipt or QR code
            </div>
            <div style={{ position: "relative", width: "80%", height: "55%", borderRadius: 20, border: "2px dashed #CDDE5C" }} />
            <div className="fl-scan-line" style={{ position: "absolute", left: "10%", right: "10%", top: "22.5%", height: 2, background: "linear-gradient(90deg,transparent,#CDDE5C,transparent)" }} />
          </div>
          <div style={{ flex: "none", background: "#F6F5F0", padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{ width: "100%", height: 44, borderRadius: 44, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1F4234" }}>
              <IconScanCorners size={15} color="#1F4234" strokeWidth={2} />
              Scan Receipt
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#4B5563" }}>
              <IconGallery size={13} color="#4B5563" />
              Upload from gallery
            </div>
          </div>
        </div>

        {/* Step 3 — Earn */}
        <div style={{ position: "absolute", inset: 0, background: "#FFFFFF", opacity: op(2), transform: `scale(${sc(2)})`, transition: "opacity .45s ease, transform .45s ease", overflow: "hidden" }}>
          <div style={{ background: "#00805A", padding: "44px 24px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FlagrrIcon color="white" height={20} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#FFFFFF" }}>Home</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ position: "relative", display: "flex" }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFFFFF" style={{ display: "block" }}>
                    <path d="M12 2.5a6 6 0 0 0-6 6v3.2l-1.6 3.1A1 1 0 0 0 5.3 16h13.4a1 1 0 0 0 .9-1.2L18 11.7V8.5a6 6 0 0 0-6-6Z" />
                    <path d="M9.6 17.4a2.5 2.5 0 0 0 4.8 0Z" />
                  </svg>
                  <span style={{ position: "absolute", top: -2, right: -4, width: 8, height: 8, borderRadius: 4, background: "#CDDE5C" }} />
                </span>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,.24)" }} />
              </div>
            </div>
            <div style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "#FFFFFF" }}>Hello, Lourens</div>
          </div>
          <div style={{ margin: "-32px 20px 0", borderRadius: 20, background: "#1F4234", padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, lineHeight: 1, color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>{earnCount}</div>
                <div style={{ fontSize: 10, color: "#FFFFFF" }}>Flagrr Cash</div>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 9px", borderRadius: 44, background: "linear-gradient(135deg,#A86C0A,#FDD248)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 9, letterSpacing: ".06em", color: "#FFFFFF", textTransform: "uppercase" }}>
                Gold Member
              </span>
            </div>
            <div style={{ height: 9, borderRadius: 44, background: "#E9E7FF", overflow: "hidden" }}>
              <div style={{ height: "100%", width: "64%", borderRadius: 44, background: "#00805A" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,.7)" }}>1 786 pts to Platinum</span>
              <span style={{ width: 11, height: 11, borderRadius: "50%", border: "1px solid #00805A" }} />
            </div>
            <div style={{ height: 44, borderRadius: 44, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "#1F4234" }}>
              Redeem Flagrr Cash <span style={{ fontSize: 13 }}>&#8594;</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", padding: 12, borderRadius: 15, background: "#00805A" }}>
              <span style={{ width: 44, height: 44, flex: "none", borderRadius: 11, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#CDDE5C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3s5 4.5 5 9a5 5 0 0 1-10 0c0-1.8 1-3.4 2-4.6.4 1.6 1.4 2.6 2.4 2.6 1.2 0 2-1 1.6-2.6C12.6 5.9 12 4.4 12 3Z" />
                </svg>
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#FFFFFF" }}>6-Week Streak</div>
                <div style={{ fontSize: 8.5, color: "#FFFFFF", margin: "1px 0 0" }}>You&#8217;ve played every week since February 2026</div>
                <div style={{ fontSize: 8.5, fontWeight: 500, color: "#CDDE5C", margin: "1px 0 0" }}>2 more weeks to a 200 Flagrr Cash bonus</div>
                <div style={{ display: "flex", gap: 4, margin: "7px 0 0" }}>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i} style={{ width: 9, height: 9, borderRadius: 5, background: i < 6 ? "#CDDE5C" : "rgba(255,255,255,.3)" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "18px 20px 0", padding: 12, borderRadius: 15, background: "#CCF2E6", border: ".5px solid #00805A" }}>
            <span style={{ width: 40, height: 40, borderRadius: 8, background: "repeating-linear-gradient(120deg,#E4EBDC 0 6px,#D6DFCA 6px 12px)" }} />
            <div>
              <div style={{ fontSize: 9, color: "#4B5563" }}>Your Club</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#1F1F1F", margin: "1px 0 0" }}>Strand Golf Club</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "18px 20px 0" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "#1F1F1F" }}>My Stats</span>
            <span style={{ display: "flex", gap: 3, padding: 3, borderRadius: 44, background: "#CCF2E6" }}>
              <span style={{ padding: "5px 11px", borderRadius: 44, background: "#1F4234", fontFamily: "var(--font-display)", fontSize: 10, color: "#FFFFFF" }}>Month</span>
              <span style={{ padding: "5px 11px", borderRadius: 44, fontFamily: "var(--font-display)", fontSize: 10, color: "#1F1F1F" }}>Year</span>
              <span style={{ padding: "5px 11px", borderRadius: 44, fontFamily: "var(--font-display)", fontSize: 10, color: "#1F1F1F" }}>All</span>
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "12px 20px 0" }}>
            {[
              { label: "Rounds Played (9 Holes)", value: "4", delta: 12 },
              { label: "Rounds Played (18 Holes)", value: "6", delta: 8 },
            ].map((s) => (
              <div key={s.label} style={{ padding: 12, borderRadius: 15, background: "#CCF2E6", border: ".5px solid #00805A" }}>
                <div style={{ fontSize: 8.5, color: "#1F1F1F", lineHeight: 1.3 }}>{s.label}</div>
                <div style={{ margin: "3px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "#1F1F1F", fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
                <div style={{ margin: "2px 0 0", fontSize: 8, color: "#CDDE5C", filter: "brightness(.72)" }}>&#9650; {s.delta}% vs Last Month</div>
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 96, background: "linear-gradient(180deg,rgba(255,255,255,0),#FFFFFF 62%)" }} />
          <div style={{ position: "absolute", left: "50%", bottom: 16, transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 22, height: 56, padding: "0 22px", borderRadius: 25, background: "#F0FFFB", boxShadow: "0 0 12px rgba(31,66,52,.16)" }}>
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#00805A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="rgba(31,66,52,.4)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="1.5" /><path d="M3 12h18M12 8v13" /></svg>
            <span style={{ width: 36, height: 36, marginTop: -16, borderRadius: 20, background: "#00805A", border: "1.5px solid #F0FFFB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconScanCorners size={17} color="#FFFFFF" strokeWidth={2} />
            </span>
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="rgba(31,66,52,.4)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5.5l3.5 2" /></svg>
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="rgba(31,66,52,.4)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.6" /><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" /></svg>
          </div>
        </div>

        {/* Step 4 — Redeem */}
        <div style={{ position: "absolute", inset: 0, background: "#F6F5F0", display: "flex", flexDirection: "column", opacity: op(3), transform: `scale(${sc(3)})`, transition: "opacity .45s ease, transform .45s ease", overflow: "hidden" }}>
          <div style={{ flex: "none", background: "#00805A", padding: "44px 20px 0" }}>
            <div style={{ height: 62, display: "flex", alignItems: "center", gap: 14 }}>
              <IconChevronBack size={22} color="#FFFFFF" strokeWidth={2} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#FFFFFF" }}>Voucher</span>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: 20 }}>
            <div style={{ borderRadius: 24, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", background: "linear-gradient(180deg,#00805A,#1F4234)" }}>
              <div style={{ background: "#F6F5F0", padding: 12, borderRadius: 15, margin: "0 0 20px" }}>
                <svg viewBox="0 0 37 37" width="128" height="128" style={{ display: "block" }}>
                  <rect width="37" height="37" fill="#F6F5F0" />
                  <path d={voucherD} fill="#1F4234" shapeRendering="crispEdges" />
                </svg>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, lineHeight: 1.1, color: "#CDDE5C", textAlign: "center" }}>Reward Redeemed</div>
              <div style={{ margin: "8px 0 20px", fontSize: 11, fontWeight: 300, lineHeight: 1.5, color: "#FFFFFF", textAlign: "center" }}>
                Your reward has been successfully redeemed. Present your QR code or voucher code at the club to claim.
              </div>
              <div style={{ padding: "11px 20px", borderRadius: 44, background: "#00805A", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "#FFFFFF", textAlign: "center" }}>
                Pro Shop Voucher — R500
              </div>
              <div style={{ margin: "20px 0 0", fontSize: 9.5, fontWeight: 600, color: "#FFFFFF" }}>Voucher Code</div>
              <div style={{ margin: "2px 0 0", fontSize: 12, fontWeight: 600, letterSpacing: ".06em", color: "#FFFFFF" }}>FLGR-8T4K</div>
            </div>
            <div style={{ margin: "24px 0 0", height: 44, borderRadius: 44, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#FFFFFF" }}>
              Back to Rewards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
