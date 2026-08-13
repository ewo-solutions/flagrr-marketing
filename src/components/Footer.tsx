"use client";

import { FlagrrLogo } from "@/components/Logo";
import { footerCols } from "@/content/home";

export function FooterFull() {
  return (
    <footer style={{ background: "#0E211A", padding: "80px 40px 40px", borderTop: "1px solid rgba(246,245,240,.1)" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
        className="fl-footer-grid"
      >
        <div>
          <FlagrrLogo color="white" height={52} style={{ opacity: 0.9 }} />
          <p style={{ margin: "20px 0 0", maxWidth: "32ch", fontSize: 13.5, fontWeight: 300, lineHeight: 1.65, color: "rgba(246,245,240,.55)" }}>
            Loyalty for golf clubs and the people who play them.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".2em", color: "rgba(246,245,240,.4)", textTransform: "uppercase" }}>
              {col.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, margin: "18px 0 0" }}>
              {col.links.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: 1180,
          margin: "56px auto 0",
          padding: "24px 0 0",
          borderTop: "1px solid rgba(246,245,240,.1)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: ".08em",
          color: "rgba(246,245,240,.38)",
        }}
      >
        <span>© 2026 [ LEGAL ENTITY NAME ] · Reg. [ NUMBER ] · [ REGISTERED ADDRESS ]</span>
        <span>[ SUPPORT@DOMAIN ] · Governed by South African law (POPIA) — pending legal review</span>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{ fontSize: 13.5, fontWeight: 300, color: "rgba(246,245,240,.66)", transition: "color .2s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#CDDE5C")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(246,245,240,.66)")}
    >
      {label}
    </a>
  );
}

export function FooterCondensed({
  links,
  legalNote,
}: {
  links: NavFooterLink[];
  legalNote?: string;
}) {
  return (
    <footer style={{ background: "#0E211A", color: "#F6F5F0", padding: "64px 40px 36px", borderTop: "1px solid rgba(246,245,240,.1)" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <FlagrrLogo color="white" height={46} style={{ opacity: 0.9 }} />
        <div style={{ display: "flex", gap: 26, flexWrap: "wrap" }}>
          {links.map((l) => (
            <FooterLink key={l.label} href={l.href} label={l.label} />
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1180,
          margin: "34px auto 0",
          padding: "20px 0 0",
          borderTop: "1px solid rgba(246,245,240,.1)",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: ".08em",
          color: "rgba(246,245,240,.38)",
        }}
      >
        © 2026 [ LEGAL ENTITY NAME ] · Reg. [ NUMBER ] · [ ADDRESS ] · POPIA — pending legal review{legalNote ? ` · ${legalNote}` : ""}
      </div>
    </footer>
  );
}

export interface NavFooterLink {
  label: string;
  href: string;
}
