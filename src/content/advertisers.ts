// Placeholder content for the advertiser-facing page. Reach, engagement and
// pricing figures below are illustrative — swap for real numbers once
// Flagrr has enough live clubs and members to report them honestly.

export const statBar = [
  { v: "18 400+", k: "app opens a month" },
  { v: "63%", k: "weekly active golfers" },
  { v: "R1 = 1 FC", k: "every receipt scanned" },
  { v: "4", k: "ad placements" },
];

export interface AdFormat {
  tag: string;
  title: string;
  body: string;
}

export const adFormats: AdFormat[] = [
  {
    tag: "home banner · 1",
    title: "Home screen banner",
    body: "A card on the golfer’s home feed, between their balance and their streak — the first thing they see when they open the app.",
  },
  {
    tag: "home banner · 2",
    title: "Second home banner",
    body: "A second slot further down the same home feed — a follow-up message, or a different advertiser in rotation.",
  },
  {
    tag: "catalogue",
    title: "Rewards catalogue ad slot",
    body: "A dedicated ad slot inside the rewards catalogue itself, sitting alongside the club’s own vouchers and rounds.",
  },
  {
    tag: "branded reward",
    title: "Sponsored reward",
    body: "A brand-funded reward listed in the catalogue — golfers redeem it like any other reward, and it doubles as a placement of its own.",
  },
];

export interface PricingTier {
  name: string;
  price: string;
  per: string;
  blurb: string;
  features: string[];
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Club slot",
    price: "R1 950",
    per: "/ month",
    blurb: "One club, all three placements.",
    features: [],
  },
  {
    name: "Regional bundle",
    price: "R14 500",
    per: "/ month",
    blurb: "Ten clubs in one province.",
    features: [],
  },
  {
    name: "National",
    price: "R38 500",
    per: "/ month",
    blurb: "Platform-wide, every club, every placement.",
    features: [],
    featured: true,
  },
  {
    name: "Sponsored reward",
    price: "R9 750",
    per: "/ month",
    blurb: "A brand-funded reward in the shop.",
    features: [],
  },
];

export const steps = [
  { name: "Brief", title: "Tell us the campaign.", body: "Audience, budget, dates, creative — we’ll tell you straight away what’s realistic." },
  { name: "Build", title: "We set up the placement.", body: "Creative goes into the format you’ve chosen, targeted to the club groups, tiers or regions you want." },
  { name: "Run", title: "It goes live in the app.", body: "Golfers see it where they already are — no separate app, no extra login, no ad blocker." },
  { name: "Report", title: "You get the numbers.", body: "Impressions, taps and — where the format allows it — redemptions traced back to the campaign." },
];
