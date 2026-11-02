export const statBar = [
  { v: "Cross-platform", k: "app and web" },
  { v: "Automatic", k: "receipt rating" },
  { v: "2 roles", k: "one console" },
  { v: "Your course", k: "mapped for members" },
  { v: "R2 500", k: "a month to start" },
];

export interface NavGroup {
  label?: string;
  items: string[];
}

export interface Role {
  name: string;
  slug: string;
  title: string;
  body: string;
  caps: string[];
  nav: NavGroup[];
  navActive: string;
}

// Mirrors the admin console's sidebar groups (mobile/src/navigation/adminNavConfig.ts
// in lourens-tech/flaggr). Keep in step when the console's navigation changes.
export const roles: Role[] = [
  {
    name: "Course admin",
    slug: "course-admin",
    title: "The club’s own admin",
    body: "Everything the club runs day to day: the catalogue, the staff, the members and the awkward receipts. What needs you shows up first.",
    caps: [
      "Flagged receipts and new enquiries waiting on the home page",
      "Build and price the reward catalogue",
      "Approve or reject flagged receipts before any Flagrr Cash credits",
      "Upload your member roster so members can climb tiers",
      "Answer member enquiries in live chat",
      "Push notifications to every member or a single tier",
      "Staff logins and a second club admin",
      "Send your scorecard and get your course mapped",
    ],
    nav: [
      { items: ["Home"] },
      { label: "Members", items: ["Enquiries", "Fraud Review", "Member Roster"] },
      { label: "Rewards", items: ["Rewards", "Products and Activities", "Vouchers"] },
      { label: "Messaging", items: ["Push Notifications"] },
      { label: "Club", items: ["Staff and Admins", "Club Settings", "Flagrr Support"] },
    ],
    navActive: "Home",
  },
  {
    name: "Staff",
    slug: "staff",
    title: "The counter",
    body: "One login for the pro shop, the bar or the kitchen: look up the code or scan the QR, check the reward and the member, redeem it. That’s where their access stops.",
    caps: [
      "Look up a voucher by its code or scan the QR",
      "See the reward and the member before redeeming",
      "Every redemption logged against their name",
      "Raise a ticket with Flagrr support",
      "Username login, so staff can share one email address",
      "No member lists, reports or settings",
    ],
    nav: [{ items: ["Vouchers", "Flagrr Support", "Profile"] }],
    navActive: "Vouchers",
  },
];

export const courseMapSteps = [
  { stage: "Send your scorecard", body: "Upload up to 12 photos of your card from the Course map panel on your dashboard." },
  { stage: "Photos received", body: "The Flagrr team is told straight away and picks them up." },
  { stage: "Being built", body: "Every hole is drawn from your card and the course layout. Tees, ratings, par and stroke index are checked before anything goes live." },
  { stage: "Live", body: "Your members get hole maps, a scorecard and My Golf at your course. Flagrr members from other clubs can play it as an away course." },
];

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
  "Your course mapped, with a scorecard in every pocket",
];
