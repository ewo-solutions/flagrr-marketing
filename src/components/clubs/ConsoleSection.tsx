"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { badgeColors, roles } from "@/content/clubs";

export default function ConsoleSection() {
  const [role, setRole] = useState(0);
  const r = roles[role];

  return (
    <section className="fl-px" style={{ background: "#F6F5F0", padding: "130px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: "52ch" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".24em", color: "#00805A", textTransform: "uppercase" }}>the console</span>
          <h2 style={{ margin: "24px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4.6vw,68px)", lineHeight: 0.98, letterSpacing: "-.028em", color: "#12271F" }}>
            Four roles. One console.
          </h2>
          <p style={{ margin: "22px 0 0", fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "rgba(18,39,31,.7)" }}>
            Club-side Flagrr runs wherever the work happens — the app, the web app or a downloadable desktop app. Same console, same roles, nothing to keep in sync.
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

          <Reveal delay={1} style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(18,39,31,.14)", background: "#FFFFFF", boxShadow: "0 40px 70px -40px rgba(18,39,31,.4)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: "#12271F" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(246,245,240,.3)" }} />
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(246,245,240,.3)" }} />
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(246,245,240,.3)" }} />
              <span style={{ marginLeft: 12, fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".1em", color: "rgba(246,245,240,.55)" }}>
                flagrr-loyalty.app / {r.slug}
              </span>
            </div>
            <div style={{ display: "flex", minHeight: 400 }} className="fl-console-body">
              <div className="fl-hide-compact" style={{ width: 168, flex: "none", background: "#F1F0EA", borderRight: "1px solid rgba(18,39,31,.1)", padding: "18px 14px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: ".16em", color: "rgba(18,39,31,.4)", textTransform: "uppercase" }}>{r.slug}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 3, margin: "16px 0 0" }}>
                  {r.nav.map((label, i) => {
                    const active = i === r.navActive;
                    return (
                      <div key={label} style={{ padding: "9px 10px", borderRadius: 8, background: active ? "rgba(0,128,90,.12)" : "transparent", color: active ? "#00805A" : "rgba(18,39,31,.6)", fontSize: 11.5, fontWeight: active ? 600 : 400 }}>
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ flex: 1, padding: "22px 24px", minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#12271F" }}>{r.panel}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".12em", color: "rgba(18,39,31,.42)", textTransform: "uppercase" }}>live</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, margin: "18px 0 0" }}>
                  {r.stats.map((s) => (
                    <div key={s.k} style={{ padding: "14px 12px", borderRadius: 12, background: "#F6F5F0", border: "1px solid rgba(18,39,31,.09)" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, letterSpacing: "-.02em", color: "#12271F", fontVariantNumeric: "tabular-nums" }}>{s.v}</div>
                      <div style={{ margin: "4px 0 0", fontSize: 10, color: "rgba(18,39,31,.55)" }}>{s.k}</div>
                    </div>
                  ))}
                </div>
                <div style={{ margin: "18px 0 0", border: "1px solid rgba(18,39,31,.1)", borderRadius: 12, overflow: "hidden" }}>
                  {r.rows.map((row) => {
                    const badge = badgeColors(row.c);
                    return (
                      <div key={row.a} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr .8fr", gap: 10, padding: "12px 14px", borderBottom: "1px solid rgba(18,39,31,.07)", fontSize: 11.5, alignItems: "center" }}>
                        <span style={{ fontWeight: 500, color: "#12271F" }}>{row.a}</span>
                        <span style={{ color: "rgba(18,39,31,.6)" }}>{row.b}</span>
                        <span style={{ justifySelf: "end", padding: "4px 10px", borderRadius: 999, background: badge.bg, color: badge.fg, fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: ".1em", textTransform: "uppercase" }}>
                          {row.c}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
