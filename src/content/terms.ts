// Draft placeholder copy — see src/components/legal/LegalPage.tsx for the
// "pending legal review" banner shown on the rendered page. Swap this out
// once counsel has reviewed real terms.

import type { LegalSection } from "@/components/legal/LegalPage";

export const termsUpdated = "Draft · not yet published";

export const termsIntro =
  "These terms cover use of the Flagrr app and this website by golfers, and the relationship between Flagrr and the golf clubs and advertisers that use the platform. By using Flagrr, you agree to them.";

export const termsSections: LegalSection[] = [
  {
    heading: "1. Who we are",
    body: [
      "Flagrr is operated by [ LEGAL ENTITY NAME ], registration number [ NUMBER ], of [ REGISTERED ADDRESS ] (\"Flagrr\", \"we\", \"us\").",
    ],
  },
  {
    heading: "2. Accepting these terms",
    body: [
      "Creating a Flagrr account, scanning a receipt, or otherwise using the app or this site means you accept these terms. If you don't agree to them, don't use Flagrr.",
    ],
  },
  {
    heading: "3. The app and Flagrr Cash",
    body: [
      "Golfers earn Flagrr Cash by scanning eligible receipts from participating clubs, and can redeem it against rewards in that club's catalogue.",
      "Flagrr Cash has no monetary value, is not legal tender, and cannot be bought, sold, transferred between accounts, or cashed out. Balances are tied to the club(s) that issued them and may expire, be adjusted, or be revoked if we reasonably suspect fraud, duplicate submissions, or abuse.",
      "Receipts are reviewed automatically and, where flagged, manually. We can decline to credit a receipt at our discretion.",
    ],
  },
  {
    heading: "4. Clubs and advertisers",
    body: [
      "Clubs subscribe to Flagrr to run a branded loyalty programme for their members, set their own reward catalogue, and manage member data through the club console. Advertisers pay to place ads or sponsored rewards within the app, targeted to segments of golfers across one or more clubs.",
      "Separate commercial terms apply to club and advertiser accounts and will be confirmed directly with those accounts; this page covers the platform-wide terms that apply to everyone.",
    ],
  },
  {
    heading: "5. Acceptable use",
    body: [
      "Don't submit fraudulent or altered receipts, attempt to manipulate streaks, tiers or referral rewards, resell or trade Flagrr Cash, scrape or reverse-engineer the app, or use the platform for anything unlawful.",
      "We can suspend or close an account that breaches these terms.",
    ],
  },
  {
    heading: "6. Intellectual property",
    body: [
      "The Flagrr name, logo, app and this website belong to us or our licensors. Nothing here grants you rights to our brand or code beyond ordinary use of the app.",
    ],
  },
  {
    heading: "7. Disclaimers and liability",
    body: [
      "Flagrr is provided as-is. We don't guarantee the app will be uninterrupted or error-free, and we're not liable for rewards, offers or stock made available by clubs or advertisers, which they control directly.",
      "To the extent permitted by law, our liability to you is limited to direct damages arising from our own breach of these terms.",
    ],
  },
  {
    heading: "8. Changes to these terms",
    body: [
      "We may update these terms as the product changes. Continued use of Flagrr after an update means you accept the revised terms.",
    ],
  },
  {
    heading: "9. Governing law",
    body: ["These terms are governed by the laws of South Africa."],
  },
  {
    heading: "10. Contact",
    body: ["Questions about these terms: [ SUPPORT@DOMAIN ]."],
  },
];
