"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { roles, type Role } from "@/content/clubs";

// The console mock follows the admin "Liquid Glass" look: translucent glass
// only on navigation, over a heavily blurred club cover photo, with content
// on opaque white tiles. System font for interface text, Fraunces for titles,
// Flag Green as the single light-mode accent (lime fails contrast on light).
const SYS = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const ACCENT = "#00704F";
const INK = "#111412";
const MUTED = "#5F6661";
const glass = {
  background: "rgba(255,255,255,.52)",
  backdropFilter: "blur(22px) saturate(1.6)",
  WebkitBackdropFilter: "blur(22px) saturate(1.6)",
} as const;
const tile = { background: "#FFFFFF", borderRadius: 14, boxShadow: "0 1px 2px rgba(17,20,18,.06), 0 8px 24px -16px rgba(17,20,18,.25)" } as const;

function Pill({ tone, children }: { tone: "green" | "amber" | "red"; children: string }) {
  const c = { green: ["rgba(0,128,90,.12)", ACCENT], amber: ["#FBEFD6", "#8A5A00"], red: ["rgba(200,50,42,.12)", "#A3261F"] }[tone];
  return <span style={{ padding: "3px 9px", borderRadius: 999, background: c[0], color: c[1], fontSize: 10.5, fontWeight: 600, whiteSpace: "nowrap" }}>{children}</span>;
}

function Sidebar({ r }: { r: Role }) {
  return (
    <div className="fl-hide-compact" style={{ ...glass, position: "relative", width: 184, flex: "none", borderRight: "1px solid rgba(255,255,255,.6)", padding: "16px 12px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "0 6px" }}>
        <span style={{ width: 30, height: 30, borderRadius: 9, background: "#1F4234", color: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12 }}>YC</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: INK, lineHeight: 1.2 }}>Your Golf Club</div>
          <div style={{ fontSize: 10, color: MUTED }}>{r.name}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "18px 0 0", flex: 1 }}>
        {r.nav.map((g, gi) => (
          <div key={gi}>
            {g.label && <div style={{ padding: "0 8px 4px", fontSize: 9.5, fontWeight: 600, letterSpacing: ".06em", color: MUTED, textTransform: "uppercase" }}>{g.label}</div>}
            {g.items.map((label) => {
              const active = label === r.navActive;
              return (
                <div key={label} style={{ padding: "6px 8px", borderRadius: 8, background: active ? "rgba(255,255,255,.85)" : "transparent", boxShadow: active ? "0 1px 2px rgba(17,20,18,.08)" : undefined, color: active ? ACCENT : "#2B302C", fontSize: 11.5, fontWeight: active ? 600 : 450 }}>
                  {label}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 8px 0", borderTop: "1px solid rgba(17,20,18,.08)", fontSize: 9.5, color: MUTED }}>Powered by Flagrr</div>
    </div>
  );
}

function Toolbar({ crumb, bell }: { crumb: string; bell: boolean }) {
  return (
    <div style={{ ...glass, display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,.6)" }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: INK, flex: 1 }}>{crumb}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 10px", borderRadius: 999, background: "rgba(255,255,255,.7)", fontSize: 11, color: MUTED }}>
        Search
        <span style={{ padding: "1px 5px", borderRadius: 5, background: "rgba(17,20,18,.06)", fontSize: 9.5 }}>&#8984;K</span>
      </span>
      {bell && (
        <span style={{ position: "relative", display: "flex" }}>
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round">
            <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
            <path d="M10 20.5a2 2 0 0 0 4 0" />
          </svg>
          <span style={{ position: "absolute", top: -4, right: -6, minWidth: 14, height: 14, borderRadius: 7, background: "#C8322A", color: "#FFFFFF", fontSize: 8.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>3</span>
        </span>
      )}
    </div>
  );
}

function CourseAdminHome() {
  const kpis = [
    ["Flagrr Cash earned", "58 240", "+12%"],
    ["Members", "412", "+18"],
    ["Receipts scanned", "1 386", "+9%"],
    ["Vouchers redeemed", "214", "+6%"],
  ];
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ ...tile, position: "relative", overflow: "hidden", padding: "18px 18px 16px", background: "#1F4234", color: "#FFFFFF" }}>
        <Image src="/images/strand-golf-club-fairway.jpg" alt="" fill sizes="600px" style={{ objectFit: "cover", opacity: 0.55 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(31,66,52,.1),rgba(31,66,52,.85))" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 11, opacity: 0.85 }}>Your Golf Club · this month</div>
          <div style={{ margin: "4px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, letterSpacing: "-.02em" }}>Good morning</div>
        </div>
      </div>
      <div style={{ ...tile, padding: "12px 14px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: INK }}>Needs you</div>
        {[
          ["1 receipt flagged", "650 Flagrr Cash held until you review it", "Review"],
          ["2 new enquiries", "Members waiting in live chat", "Reply"],
        ].map(([a, b, c]) => (
          <div key={a} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0 0", marginTop: 9, borderTop: "1px solid rgba(17,20,18,.07)" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: INK }}>{a}</div>
              <div style={{ fontSize: 10.5, color: MUTED }}>{b}</div>
            </div>
            <span style={{ padding: "5px 12px", borderRadius: 999, background: ACCENT, color: "#FFFFFF", fontSize: 10.5, fontWeight: 600 }}>{c}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 10 }}>
        {kpis.map(([k, v, d]) => (
          <div key={k} style={{ ...tile, padding: "11px 12px" }}>
            <div style={{ fontSize: 10, color: MUTED }}>{k}</div>
            <div style={{ margin: "3px 0 0", fontWeight: 650, fontSize: 19, letterSpacing: "-.01em", color: INK, fontVariantNumeric: "tabular-nums" }}>{v}</div>
            <div style={{ fontSize: 10, color: ACCENT, fontWeight: 600 }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ ...tile, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: INK }}>Course map</div>
          <div style={{ fontSize: 10.5, color: MUTED }}>18 holes · members can start a round</div>
        </div>
        <Pill tone="green">Live</Pill>
      </div>
    </div>
  );
}

function StaffVouchers() {
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, letterSpacing: "-.02em", color: INK }}>Vouchers</div>
      <div style={{ ...tile, padding: 14, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ flex: "1 1 140px", padding: "9px 12px", borderRadius: 10, background: "#F2F4F1", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".08em", color: INK }}>FLGR-8T4K-QX2M</span>
        <span style={{ padding: "8px 14px", borderRadius: 999, background: ACCENT, color: "#FFFFFF", fontSize: 11, fontWeight: 600 }}>Look up</span>
        <span style={{ padding: "8px 14px", borderRadius: 999, background: "rgba(17,20,18,.06)", color: INK, fontSize: 11, fontWeight: 600 }}>Scan QR</span>
      </div>
      <div style={{ ...tile, padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 14, fontWeight: 650, color: INK }}>Pro Shop Voucher</div>
          <Pill tone="green">Valid</Pill>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "12px 0 0", fontSize: 11 }}>
          {[["Member", "Thandi M."], ["Option", "R500"], ["Issued", "2 Nov"], ["Expires", "31 Jan"]].map(([k, v]) => (
            <div key={k}>
              <div style={{ color: MUTED }}>{k}</div>
              <div style={{ color: INK, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ margin: "14px 0 0", padding: "10px 0", borderRadius: 999, background: ACCENT, color: "#FFFFFF", textAlign: "center", fontSize: 12, fontWeight: 600 }}>Redeem voucher</div>
      </div>
      <div style={{ ...tile, overflow: "hidden" }}>
        {[
          ["FLGR-2QM7-H4LP", "Bar Voucher", "Redeemed"],
          ["FLGR-9XD1-T6RA", "Cart Hire", "Redeemed"],
          ["FLGR-1KK2-W8NB", "Coaching Session", "Expired"],
        ].map(([a, b, c]) => (
          <div key={a} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr auto", gap: 10, alignItems: "center", padding: "9px 14px", borderBottom: "1px solid rgba(17,20,18,.06)", fontSize: 11 }}>
            <span style={{ fontFamily: "var(--font-mono)", color: INK, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a}</span>
            <span style={{ color: MUTED }}>{b}</span>
            <Pill tone={c === "Expired" ? "red" : "amber"}>{c}</Pill>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConsoleSection() {
  const [role, setRole] = useState(0);
  const r = roles[role];

  return (
    <section className="fl-px" style={{ background: "#F6F5F0", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "54ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>the console</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em", color: "#12271F" }}>
            Two roles. One console.
          </h2>
          <p style={{ margin: "22px 0 0", fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.7)" }}>
            Club-side Flagrr runs in the browser. On the office computer it’s a sidebar over your own cover photo, with &#8984;K to jump to any section or member. On a phone it gets its own tab bar. Light or dark, your call.
          </p>
        </Reveal>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "48px 0 0" }}>
          {roles.map((x, i) => {
            const active = role === i;
            return (
              <button
                key={x.name}
                type="button"
                onClick={() => setRole(i)}
                aria-pressed={active}
                style={{
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: `1px solid ${active ? "#12271F" : "rgba(18,39,31,.2)"}`,
                  background: active ? "#12271F" : "transparent",
                  color: active ? "#F6F5F0" : "rgba(18,39,31,.6)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all .3s ease",
                }}
              >
                {x.name}
              </button>
            );
          })}
        </div>

        <div className="fl-split-b" style={{ display: "grid", gap: 48, margin: "44px 0 0", alignItems: "start" }}>
          <div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 32, lineHeight: 1.1, letterSpacing: "-.02em", color: "#12271F" }}>{r.title}</h3>
            <p style={{ margin: "16px 0 0", minHeight: "4.5em", fontSize: 16, fontWeight: 300, lineHeight: 1.62, color: "rgba(18,39,31,.7)" }}>{r.body}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "28px 0 0" }}>
              {r.caps.map((c) => (
                <div key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14.5, fontWeight: 300, lineHeight: 1.5, color: "rgba(18,39,31,.78)" }}>
                  <span style={{ color: "#00805A", paddingTop: 2, fontSize: 11 }}>&#9679;</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={1}>
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(18,39,31,.14)", boxShadow: "0 40px 70px -40px rgba(18,39,31,.45)", fontFamily: SYS }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 16px", background: "#E4E7DF", borderBottom: "1px solid rgba(17,20,18,.08)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                <span style={{ margin: "0 auto", padding: "3px 14px", borderRadius: 7, background: "rgba(255,255,255,.7)", fontSize: 10.5, color: MUTED }}>flagrr-loyalty.vercel.app</span>
              </div>
              <div style={{ position: "relative", display: "flex", minHeight: 470, background: "#ECEEE6" }}>
                <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                  <Image src="/images/strand-golf-club-fairway.jpg" alt="" fill sizes="700px" style={{ objectFit: "cover", filter: "blur(30px) saturate(1.2)", transform: "scale(1.2)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(236,238,230,.62)" }} />
                </div>
                <Sidebar r={r} />
                <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
                  <Toolbar crumb={r.navActive} bell={r.slug === "course-admin"} />
                  {r.slug === "course-admin" ? <CourseAdminHome /> : <StaffVouchers />}
                </div>
              </div>
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 12, color: "#4B5563" }}>Shown with sample data.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
