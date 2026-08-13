"use client";

import { useState } from "react";
import Link from "next/link";
import { FlagrrIcon } from "@/components/Logo";
import { useScrollState } from "@/lib/hooks";

export interface NavLink {
  label: string;
  href: string;
}

export default function Nav({
  theme,
  logoHref,
  links,
  cta,
}: {
  theme: "dark" | "light";
  logoHref: string;
  links: NavLink[];
  cta: NavLink;
}) {
  const { y } = useScrollState();
  const [open, setOpen] = useState(false);
  const past = y > 60;

  const dark = theme === "dark";
  const navBg = past ? (dark ? "rgba(14,33,26,.82)" : "rgba(246,245,240,.88)") : dark ? "rgba(18,39,31,0)" : "rgba(246,245,240,0)";
  const navBorder = past ? (dark ? "rgba(246,245,240,.12)" : "rgba(18,39,31,.12)") : "rgba(0,0,0,0)";
  const textColor = dark ? "rgba(246,245,240,.72)" : "rgba(18,39,31,.65)";
  const textHover = dark ? "#F6F5F0" : "#12271F";
  const iconColor = dark ? "lime" : "darkgreen";
  const eyebrowColor = dark ? "rgba(246,245,240,.62)" : "rgba(18,39,31,.55)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "16px 40px",
        background: navBg,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: `1px solid ${navBorder}`,
        transition: "background .4s ease, border-color .4s ease",
      }}
    >
      <Link href={logoHref} style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <FlagrrIcon color={iconColor} height={30} />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: ".24em",
            color: eyebrowColor,
            textTransform: "uppercase",
          }}
        >
          Loyalty
        </span>
      </Link>

      <div className="fl-nav-links" style={{ display: "flex", alignItems: "center", gap: 34 }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ fontSize: 13, fontWeight: 400, color: textColor, transition: "color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = textHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
          >
            {l.label}
          </a>
        ))}
        <a
          href={cta.href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "10px 20px",
            borderRadius: 999,
            background: dark ? "#CDDE5C" : "#12271F",
            color: dark ? "#12271F" : "#F6F5F0",
            fontSize: 13,
            fontWeight: 600,
            transition: "background .2s ease, color .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = dark ? "#FFFFFF" : "#00805A";
            if (!dark) e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = dark ? "#CDDE5C" : "#12271F";
            if (!dark) e.currentTarget.style.color = "#F6F5F0";
          }}
        >
          {cta.label}
        </a>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        className="fl-nav-toggle"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          width: 38,
          height: 38,
          borderRadius: 10,
          border: `1px solid ${dark ? "rgba(246,245,240,.28)" : "rgba(18,39,31,.22)"}`,
          background: "transparent",
          color: dark ? "#F6F5F0" : "#12271F",
          cursor: "pointer",
        }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d={open ? "M6 6l12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"} />
        </svg>
      </button>

      {open && (
        <div
          className="fl-nav-toggle"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 20,
            background: dark ? "#0E211A" : "#F6F5F0",
            borderBottom: `1px solid ${dark ? "rgba(246,245,240,.12)" : "rgba(18,39,31,.12)"}`,
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ padding: "12px 4px", fontSize: 15, color: dark ? "#F6F5F0" : "#12271F", borderBottom: `1px solid ${dark ? "rgba(246,245,240,.08)" : "rgba(18,39,31,.08)"}` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={cta.href}
            onClick={() => setOpen(false)}
            style={{
              marginTop: 12,
              display: "inline-flex",
              justifyContent: "center",
              padding: "12px 20px",
              borderRadius: 999,
              background: dark ? "#CDDE5C" : "#12271F",
              color: dark ? "#12271F" : "#F6F5F0",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
