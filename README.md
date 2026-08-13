# Flagrr Marketing Site

The public marketing site for Flagrr — a golf-club loyalty product for the South African market. Three pages (Home, For Clubs, For Golfers) built from the design handoff in `design_handoff_flagrr_marketing_site/`.

Built with Next.js (App Router) + TypeScript. Styling is done with plain inline styles carrying the exact design-token values from the handoff (colours, type scale, spacing), plus a small set of Tailwind/CSS utility classes in `globals.css` for responsive behaviour, keyframe animations and the custom range-input skin.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    page.tsx            Home
    clubs/page.tsx       For clubs
    golfers/page.tsx     For golfers
    layout.tsx           Fonts (Fraunces + Poppins via next/font), metadata
    globals.css          Reset, design tokens, keyframes, responsive helpers
  components/
    Nav.tsx, Footer.tsx   Shared nav (dark/light theme) and footer (full/condensed)
    PhoneScreen.tsx       Reusable phone-app screen artwork (prop: screen 1-6)
    PhoneFrame.tsx        Device bezel that hosts PhoneScreen at any size
    icons.tsx             Inline SVG icon set (tab bar + reward categories)
    Reveal.tsx            IntersectionObserver fade/rise-in wrapper
    home/, clubs/, golfers/   Page-specific sections
  content/
    home.ts, clubs.ts, golfers.ts   Copy and structured data (reward cards,
    tiers, roles, FAQ, etc.) kept separate from markup, as CMS content would be
  lib/
    hooks.ts    Scroll position/section-progress/reduced-motion hooks
    qr.ts       Real QR (v3, ECC L) path generator for the voucher artwork
    format.ts   Thousands-separator number formatting
```

## Notes

- Scroll-driven sections (the loop, the catalogue rail, the tier ladder) degrade to plain stacked sections on touch devices, narrow viewports, and `prefers-reduced-motion: reduce`, per the design brief.
- Copy carries the bracketed placeholders (`[ LEGAL ENTITY NAME ]`, etc.) called out in the brief as pending legal/business details.
- Fonts are self-hosted via `next/font/google` (Fraunces variable + Poppins).
