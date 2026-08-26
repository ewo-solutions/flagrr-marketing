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
    tag: "home banner",
    title: "Home screen banner",
    body: "A card on the golfer’s home feed, between their balance and their streak — the first thing they see when they open the app.",
  },
  {
    tag: "catalogue",
    title: "Sponsored reward tile",
    body: "A featured slot in the rewards catalogue itself, sitting alongside the club’s own vouchers and rounds.",
  },
  {
    tag: "receipt screen",
    title: "Post-scan placement",
    body: "Shown right after a receipt is approved and Flagrr Cash lands — a moment golfers are already paying attention.",
  },
  {
    tag: "push",
    title: "Segmented push notification",
    body: "A one-off push to golfers filtered by club, tier or region, sent through the same system that already reaches them for streaks and rewards.",
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
    name: "Starter",
    price: "R3 500",
    per: "/ month",
    blurb: "One placement, one region. A clean way to test the channel.",
    features: ["One ad placement", "Single region or club group", "Monthly performance summary"],
  },
  {
    name: "Growth",
    price: "R9 000",
    per: "/ month",
    blurb: "Most advertisers start here — full rotation across formats.",
    features: ["All four placements", "National reach", "Tier and club-group targeting", "Monthly performance summary"],
    featured: true,
  },
  {
    name: "Partner",
    price: "Custom",
    per: "",
    blurb: "Season-long campaigns, co-branded rewards, first look at new inventory.",
    features: ["Everything in Growth", "Co-branded reward campaigns", "Priority inventory access", "Dedicated reporting"],
  },
];

export const steps = [
  { name: "Brief", title: "Tell us the campaign.", body: "Audience, budget, dates, creative — we’ll tell you straight away what’s realistic." },
  { name: "Build", title: "We set up the placement.", body: "Creative goes into the format you’ve chosen, targeted to the club groups, tiers or regions you want." },
  { name: "Run", title: "It goes live in the app.", body: "Golfers see it where they already are — no separate app, no extra login, no ad blocker." },
  { name: "Report", title: "You get the numbers.", body: "Impressions, taps and — where the format allows it — redemptions traced back to the campaign." },
];
