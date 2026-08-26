export const statBar = [
  { v: "Cross-platform", k: "app, web, desktop" },
  { v: "Automatic", k: "receipt rating" },
  { v: "2 roles", k: "one console" },
  { v: "R2 500", k: "a month to start" },
];

export type BadgeKind = "priority" | "billing" | "expired" | "draft" | "watch" | "used" | "claimed" | "live" | "valid" | "healthy" | "open";

export interface ConsoleRow {
  a: string;
  b: string;
  c: BadgeKind;
}

export interface Role {
  name: string;
  slug: string;
  title: string;
  body: string;
  caps: string[];
  nav: string[];
  navActive: number;
  panel: string;
  stats: { v: string; k: string }[];
  rows: ConsoleRow[];
}

export const roles: Role[] = [
  {
    name: "course_admin",
    slug: "course-admin",
    title: "The club’s own admin",
    body: "Everything the club runs day to day: the catalogue, the staff, the members, the money and the awkward receipts.",
    caps: [
      "Build and price the reward catalogue",
      "Send push notifications to segmented members",
      "Create and revoke staff accounts",
      "Review your own flagged receipts",
      "Answer member enquiries and tickets",
      "See subscription and billing status",
    ],
    nav: ["Dashboard", "Rewards", "Members", "Receipts", "Staff", "Support", "Billing"],
    navActive: 1,
    panel: "Reward catalogue",
    stats: [
      { v: "412", k: "Active members" },
      { v: "28", k: "Live rewards" },
      { v: "R2 500", k: "Plan / month" },
    ],
    rows: [
      { a: "Twilight Round for Two", b: "3 500 FC", c: "live" },
      { a: "Pro Shop Voucher R500", b: "5 000 FC", c: "live" },
      { a: "Cart Hire — 18 holes", b: "1 200 FC", c: "live" },
      { a: "Lesson with the Pro", b: "4 000 FC", c: "draft" },
      { a: "Halfway House Combo", b: "600 FC", c: "live" },
    ],
  },
  {
    name: "staff",
    slug: "staff",
    title: "Front desk and member support",
    body: "One login for the counter and the inbox: take the code, confirm the voucher, hand over the reward — then claim member enquiries and triage anything urgent. No training day required.",
    caps: [
      "Validate voucher codes in person",
      "See what the reward actually is",
      "Redemptions logged against your name",
      "Enquiries from the club’s own members",
      "Claim and hand off tickets, priority triage",
      "Minimal profile, nothing else exposed",
    ],
    nav: ["Redeem", "History", "Inbox", "Claimed", "Escalations", "Profile"],
    navActive: 0,
    panel: "Redemption desk",
    stats: [
      { v: "9", k: "Today" },
      { v: "61", k: "This month" },
      { v: "7", k: "Open enquiries" },
    ],
    rows: [
      { a: "FLGR-8T4K", b: "Twilight Round for Two", c: "valid" },
      { a: "FLGR-2QM7", b: "Pro Shop Voucher R500", c: "valid" },
      { a: "FLGR-9XD1", b: "Cart Hire — 18 holes", c: "used" },
      { a: "FLGR-5RB8", b: "Halfway House Combo", c: "valid" },
      { a: "FLGR-1KK2", b: "Lesson with the Pro", c: "expired" },
    ],
  },
];

export function badgeColors(c: BadgeKind): { bg: string; fg: string } {
  if (c === "priority" || c === "billing" || c === "expired") return { bg: "rgba(222,92,92,.14)", fg: "#A33" };
  if (c === "draft" || c === "watch" || c === "used") return { bg: "#FDE9C8", fg: "#8A5A00" };
  if (c === "claimed") return { bg: "rgba(18,39,31,.08)", fg: "rgba(18,39,31,.6)" };
  return { bg: "rgba(0,128,90,.13)", fg: "#00805A" };
}

export const without = [
  "Paper punch cards behind the till",
  "Somebody keying receipts into a spreadsheet",
  "Rewards nobody remembers claiming",
  "Guessing which members came back",
  "Fraud you find out about in April",
];

export const withFlagrr = [
  "A programme members open on their phone",
  "Receipts read and rated automatically",
  "A catalogue you change any morning",
  "Member stats and redemption activity, live",
  "Flagged receipts queued and already handled",
];
