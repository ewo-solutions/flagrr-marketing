export const perks = [
  { tag: "earn", title: "On what you already buy", body: "Pro shop, halfway house, green fees, lessons. If there’s a receipt, there’s Flagrr Cash." },
  { tag: "scan", title: "One photo, no typing", body: "The app reads the merchant, the line items and the total for you. No codes, no cards, no queueing at the desk." },
  { tag: "rewards", title: "Real things, not points", body: "Your club’s own catalogue — rounds, gear, lessons, vouchers — with sizes and variants where it matters." },
  { tag: "tiers", title: "A rate that climbs", body: "Tiers and streaks lift your multiplier the more consistently you play." },
  { tag: "anywhere", title: "One login, any club", body: "Home club or away, iOS, Android or the web app. Same Flagrr Cash." },
  { tag: "yours", title: "Your data, your call", body: "Granular notification opt-outs, a one-tap data export, and account deletion whenever you want it." },
];

export const tierRows = [
  { name: "Bronze", req: "From 0 FC a quarter · birthday 50 FC", mult: "×1.0", width: "25%", bar: "rgba(246,245,240,.5)", bg: "rgba(246,245,240,.04)", border: "rgba(246,245,240,.12)", fg: "rgba(246,245,240,.85)" },
  { name: "Silver", req: "From 5 000 FC a quarter · birthday 100 FC", mult: "×1.2", width: "50%", bar: "rgba(246,245,240,.75)", bg: "rgba(246,245,240,.05)", border: "rgba(246,245,240,.14)", fg: "#F6F5F0" },
  { name: "Gold", req: "From 10 000 FC · birthday 150 FC · R100 bar voucher a quarter", mult: "×1.5", width: "78%", bar: "linear-gradient(90deg,#A86C0A,#FDD248)", bg: "rgba(253,210,72,.08)", border: "rgba(253,210,72,.32)", fg: "#FDD248" },
  { name: "Platinum", req: "From 15 000 FC · birthday 200 FC · R200 bar voucher a quarter", mult: "×1.7", width: "100%", bar: "linear-gradient(90deg,#00805A,#CDDE5C)", bg: "rgba(205,222,92,.1)", border: "rgba(205,222,92,.4)", fg: "#CDDE5C" },
];

export const referralWays = [
  {
    tag: "friend",
    title: "Refer a friend",
    amount: "15 FC",
    body: "A friend signs up and enters your code — you get 15 Flagrr Cash the moment their account is created.",
  },
  {
    tag: "club",
    title: "Refer a golf club",
    amount: "500 FC",
    body: "A club signs up for Flagrr using your code — you get 500 Flagrr Cash once their first payment clears.",
  },
];

export const onCourse = [
  { tag: "course", title: "Your club’s card, mapped", body: "Every hole drawn from your club’s own scorecard: front, middle and back of the green, plus reach and carry over the bunkers and water." },
  { tag: "bag", title: "The right club, suggested", body: "Tell it how far you carry each club. It picks one, shows where to aim and what it leaves, and warns you when a hazard sits inside your usual miss." },
  { tag: "card", title: "Score as you go", body: "Stableford or stroke play, net and gross, putts and fairways if you want them. Enter your GolfRSA index and it shows your course and playing handicap with the working." },
  { tag: "my golf", title: "Know your game", body: "Stableford average, best round, score by par, your toughest holes and front nine against back nine, all from the rounds you finish." },
];

export const faqs = [
  { q: "What is Flagrr Cash, really?", a: "A loyalty currency, not money. You earn it on what you spend at the club and redeem it for rewards your club offers. It has no monetary value, can’t be bought, sold, transferred or cashed out — only earned and redeemed." },
  { q: "How much do I earn?", a: "Every receipt you scan earns Flagrr Cash. Your club sets its own rates, including richer ones on specific products or activities, and at your home club your tier multiplier stacks on top: Bronze 1x, Silver 1.2x, Gold 1.5x, Platinum 1.7x." },
  { q: "How do tiers actually work?", a: "Your tier is based on Flagrr Cash earned in the current quarter, not a lifetime total, so it recalculates every quarter. A quiet quarter can only drop you one tier below where you finished the last one — you never fall all the way back to Bronze in one go. To climb past Bronze, your club needs to have you on its member list." },
  { q: "What does a streak get me?", a: "Every four weeks of an unbroken weekly streak pays a bonus: 100 Flagrr Cash at four weeks, 200 at eight, 300 at twelve and every four weeks after. It lands automatically in your Rewards Activity." },
  { q: "What if I play away from my home club?", a: "Snap the receipt anyway. An away-club receipt still earns, so your account travels with you." },
  { q: "What happens if a receipt gets flagged?", a: "The receipt shows as pending and the Flagrr Cash is held while your club reviews it. If it’s approved, the Flagrr Cash is credited; if it isn’t, it isn’t. You’re told plainly either way." },
  { q: "How do I actually redeem something?", a: "Pick a reward from your club’s catalogue in the app. You get a voucher with a code; staff validate it in person at the counter." },
  { q: "Can I use Flagrr on the course?", a: "Yes, on any course Flagrr has mapped, home or away. Pick your tees and the app shows each hole with green distances and a suggested club, and keeps your scorecard. Clubs go live as their maps are built, so if yours says coming soon, it’s on its way. GPS tracking is coming soon too: for now, drag the ball to where you’re standing." },
  { q: "Does Flagrr work out my handicap?", a: "No. You enter your Handicap Index as it shows on GolfRSA, and Flagrr works out your course and playing handicap for the tees you pick, using the World Handicap System. My Golf tracks your rounds, but your official index stays with GolfRSA." },
  { q: "My club isn’t on Flagrr.", a: "Tell them. There’s a page on this site written for clubs — send it to the pro shop or the club manager. Give us their name and we’ll make the introduction ourselves." },
];
