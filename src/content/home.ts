import type { RewardIconKind } from "@/components/icons";

export const partners = [
  "Strand Golf Club",
  "Kingsward Links",
  "Hollowbrook C.C.",
  "Vlei Bend Golf Estate",
  "Ardmore Downs",
  "Cape Ridge G.C.",
];

export const cashFacts = [
  {
    stat: "R1 = 1",
    label: "Baseline earn rate",
    note: "Applies to any receipt, including away clubs.",
  },
  {
    stat: "0",
    label: "Ways to buy it",
    note: "Earned only. Non-transferable, never cashed out.",
  },
  {
    stat: "×1.7",
    label: "Top tier multiplier",
    note: "Platinum earns 1.7 Flagrr Cash on every rand.",
  },
  {
    stat: "1 tap",
    label: "To redeem",
    note: "A QR voucher, validated by staff in person.",
  },
];

export interface LoopStep {
  name: string;
  title: string;
  body: string;
}

export const loopSteps: LoopStep[] = [
  {
    name: "Spend at the club",
    title: "Spend.",
    body: "Pro shop, halfway house, green fees, a lesson. Anything on the club account or the card in your pocket. Nothing changes about the round.",
  },
  {
    name: "Scan the receipt",
    title: "Scan.",
    body: "One photo, or upload from the gallery. OCR extracts the items, matches golf products and activities, and works out the Flagrr Cash — no codes to type, no staff to interrupt.",
  },
  {
    name: "Earn Flagrr Cash",
    title: "Earn.",
    body: "Flagrr Cash lands against your club’s own rates and your tier multiplier. Streaks build. Flagged receipts still credit first and get reviewed after.",
  },
  {
    name: "Redeem at the counter",
    title: "Redeem.",
    body: "Pick from your club’s catalogue. A QR voucher and a code are issued on the spot, staff validate it in person, and the balance settles instantly.",
  },
];

export interface RewardCard {
  cat: string;
  title: string;
  desc: string;
  from: string;
  icon: RewardIconKind;
}

export const rewardCards: RewardCard[] = [
  { cat: "rounds", title: "Free Rounds", desc: "Nine or eighteen holes, on the house.", from: "from 500 FC", icon: "flag" },
  { cat: "pro shop", title: "Pro Shop Vouchers", desc: "Credit towards balls, gloves, clubs and kit.", from: "from 700 FC", icon: "bag" },
  { cat: "dining", title: "Bar & Kitchen Vouchers", desc: "Something at the turn, or after the round.", from: "from 140 FC", icon: "glass" },
  { cat: "experiences", title: "Cart Hire", desc: "Ride the course instead of walking it.", from: "from 400 FC", icon: "cart" },
  { cat: "practice", title: "Driving Range", desc: "Range time to sort out the swing.", from: "from 150 FC", icon: "range" },
  { cat: "experiences", title: "Coaching", desc: "One-on-one time with the club pro.", from: "from 1 200 FC", icon: "coach" },
];

export interface TierDef {
  name: string;
  mult: string;
  multValue: number;
  threshold: string;
  perk: string;
  fg: string;
  wash: string;
  border: string;
}

export const tierDefs: TierDef[] = [
  { name: "Bronze", mult: "1×", multValue: 1, threshold: "0 FC", perk: "Birthday reward of 50 Flagrr Cash", fg: "#F6F5F0", wash: "rgba(246,245,240,.06)", border: "rgba(246,245,240,.14)" },
  { name: "Silver", mult: "1.2×", multValue: 1.2, threshold: "5 000 FC", perk: "Birthday reward of 100 Flagrr Cash", fg: "#F6F5F0", wash: "rgba(246,245,240,.1)", border: "rgba(246,245,240,.18)" },
  { name: "Gold", mult: "1.5×", multValue: 1.5, threshold: "10 000 FC", perk: "Birthday 150 FC · R100 bar voucher a quarter", fg: "#FDD248", wash: "rgba(253,210,72,.12)", border: "rgba(253,210,72,.3)" },
  { name: "Platinum", mult: "1.7×", multValue: 1.7, threshold: "15 000 FC", perk: "Birthday 200 FC · R200 bar voucher a quarter", fg: "#CDDE5C", wash: "rgba(205,222,92,.14)", border: "rgba(205,222,92,.36)" },
];

export const calcTierNames = ["Bronze", "Silver", "Gold", "Platinum"];
export const calcTierMults = [1, 1.2, 1.5, 1.7];

export const clubCards = [
  { tag: "catalogue", title: "Your rewards, your rates", body: "Build the catalogue, set your own Flagrr Cash prices, add sizes and variants. Change it any morning." },
  { tag: "admin", title: "No manual reconciliation", body: "Receipts are read and rated automatically. Staff only ever touch a redemption at the counter." },
  { tag: "fraud", title: "Flagged before you look", body: "Suspicious receipts surface in a review queue with the member already reassured and credited." },
  { tag: "analytics", title: "Who actually comes back", body: "Member stats, redemption activity and per-staff redemptions in one dashboard." },
  { tag: "branding", title: "Your club on their home screen", body: "Club name and logo sit at the top of every member’s app. Flagrr runs the plumbing." },
  { tag: "ops", title: "Desk work stays at the desk", body: "Admin and staff tools run anywhere — the app, the web app or a desktop app. Same console either way." },
];

export const plan = {
  name: "Flagrr for Clubs",
  price: "R2 500",
  priceWas: "R5 250",
  badge: "early club special · first 3 months",
  saleNote: "R2 500 a month for your first three months as an early joining club, then R5 250 / month ex VAT.",
  per: "/ month ex VAT",
  blurb: "One plan. Every feature. Unlimited members, cancel any time.",
  features: [
    "Unlimited members, free to them",
    "Reward catalogue with variants and per-item Flagrr Cash pricing",
    "Automatic receipt OCR, matching and rating",
    "Quarterly tiers, streaks and earn multipliers",
    "Fraud review queue with duplicate detection",
    "Member list, roster verification and stats",
    "Staff accounts and in-person voucher redemption",
    "Member enquiries and support ticket handling",
    "Your club name and logo in every member’s app",
    "Push notifications to segmented member groups",
    "Priority support by phone and email",
  ],
  cta: "Book a walkthrough",
};

export const footerCols = [
  {
    title: "Product",
    links: [
      { label: "For clubs", href: "/clubs" },
      { label: "For golfers", href: "/golfers" },
      { label: "How it works", href: "/#loop" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Get it",
    links: [
      { label: "iOS app", href: "/#download" },
      { label: "Android app", href: "/#download" },
      { label: "Web app", href: "/#download" },
      { label: "Club login", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Flagrr Cash terms", href: "#" },
      { label: "[ Contact ]", href: "#" },
    ],
  },
];
