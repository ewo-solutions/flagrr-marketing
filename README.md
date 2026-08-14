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

Copy `.env.example` to `.env.local` and fill in `SITE_URL` once this site has a real deployment — the club signup flow (below) needs it.

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
    env.ts      APP_URL / SITE_URL — see "Club signup & Payfast" below
```

## Club signup & Payfast

`/clubs/signup` lets a club sign up and pay in one flow. This site **does not**
integrate with Payfast directly — the Flagrr app's own backend
(`lourens-tech/flaggr`, `api/courses/index.ts` + `api/_lib/payfast.ts`) owns
the Payfast merchant account, builds the signed checkout request, receives
Payfast's server-to-server confirmation (ITN), and creates the club + admin
account in the database. This site only ever talks to that backend's API —
it never sees Payfast credentials and never touches a database:

1. `SignupForm` (`src/components/clubs/SignupForm.tsx`) posts the form to this
   site's own `POST /api/club-signup`.
2. That route (`src/app/api/club-signup/route.ts`) validates the input and
   calls `POST {FLAGRR_APP_URL}/api/courses?action=initiateSignup`, passing
   this site's own success/cancel URLs (built from `SITE_URL`). The app
   backend stages a `pending_club_signups` row and returns a Payfast
   `actionUrl` + signed `fields`.
3. The browser is sent to Payfast (a real `<form>` POST, not a redirect —
   `redirectToPayfast()` in `SignupForm.tsx`) to complete payment.
4. Payfast redirects the browser back to `/clubs/signup/success` or
   `/clubs/signup/cancel`, and — independently, server-to-server — POSTs the
   ITN straight to the app backend's own `notify_url`. **This site is not in
   that loop at all**; the app backend validates the ITN (signature, source
   IP, and Payfast's `/eng/query/validate` confirmation) and only then
   creates the course + admin and emails the login.

Pricing is intentionally duplicated in two places and must be kept in sync:
this site's `src/content/home.ts` (`plan`) and the app backend's
`INTRO_FIRST_PAYMENT_AMOUNT` / `RECURRING_SUBSCRIPTION_AMOUNT` constants in
`api/courses/index.ts`. Current price: **R2 500 for the first month, then
R5 250 / month ex VAT**, billed indefinitely until cancelled — Payfast
subscriptions are a two-tier model (a distinct first payment, then one flat
recurring amount forever), so a true multi-month intro rate isn't
represented here; it would need a follow-up call to Payfast's
subscription-management API once the intro period ends.

Needs `SITE_URL` set to a real `https://` address to work end-to-end — both
Payfast and the app backend's own validation reject non-https return/cancel
URLs, so this can only be tested fully once deployed.

## Notes

- Scroll-driven sections (the loop, the catalogue rail, the tier ladder) degrade to plain stacked sections on touch devices, narrow viewports, and `prefers-reduced-motion: reduce`, per the design brief.
- Copy carries the bracketed placeholders (`[ LEGAL ENTITY NAME ]`, etc.) called out in the brief as pending legal/business details.
- Fonts are self-hosted via `next/font/google` (Fraunces variable + Poppins).
