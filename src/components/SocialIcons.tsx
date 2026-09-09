"use client";

import { socialLinks } from "@/content/contact";

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2H15l-.4 3H11.5v6.5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

const glyphs: Record<string, () => React.ReactElement> = {
  Instagram: InstagramGlyph,
  Facebook: FacebookGlyph,
};

export default function SocialIcons({ color = "rgba(246,245,240,.55)", hoverColor = "#CDDE5C" }: { color?: string; hoverColor?: string }) {
  return (
    <div style={{ display: "flex", gap: 14 }}>
      {socialLinks.map((s) => {
        const Glyph = glyphs[s.label];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{ display: "inline-flex", color, transition: "color .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = color)}
          >
            {Glyph ? <Glyph /> : null}
          </a>
        );
      })}
    </div>
  );
}
