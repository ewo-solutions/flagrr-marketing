// Draft placeholder copy — see src/components/legal/LegalPage.tsx for the
// "pending legal review" banner shown on the rendered page. Swap this out
// once counsel has reviewed real terms, in particular the POPIA-specific
// sections (lawful basis, retention periods, Information Officer contact).

import type { LegalSection } from "@/components/legal/LegalPage";

export const privacyUpdated = "Draft · not yet published";

export const privacyIntro =
  "This describes how Flagrr collects, uses and protects personal information through the app and this website, in line with South Africa's Protection of Personal Information Act (POPIA).";

export const privacySections: LegalSection[] = [
  {
    heading: "1. Who this applies to",
    body: [
      "This policy covers golfers using the Flagrr app, club staff using the club console, and visitors to this website.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "Account details you give us: name, email, phone number, and the club(s) you're a member of.",
      "Receipt and transaction data: images of receipts you scan, and the amounts, dates and items our OCR extracts from them, used to calculate Flagrr Cash.",
      "Activity data: app opens, streaks, redemptions, referrals, and push notification interactions.",
      "Device and usage data collected automatically, such as device type, app version, and crash/diagnostic logs.",
    ],
  },
  {
    heading: "3. How we use it",
    body: [
      "To run your loyalty account: crediting Flagrr Cash, tracking tiers and streaks, and processing redemptions.",
      "To detect fraud and duplicate or manipulated receipts.",
      "To let clubs see their own members' loyalty activity, so they can run their programme and provide support.",
      "To send you push notifications and emails about your account, club, or offers you've opted into.",
      "To improve the app and to meet our legal and accounting obligations.",
    ],
  },
  {
    heading: "4. Lawful basis and consent",
    body: [
      "We process your information on the basis of your consent when you create an account, and as necessary to perform our side of the loyalty programme you've joined. You can withdraw consent at any time by closing your account, subject to records we're legally required to keep.",
    ],
  },
  {
    heading: "5. Who we share it with",
    body: [
      "Your club(s), for the members you belong to — so they can run your loyalty programme, review flagged receipts, and provide support.",
      "Advertisers, but only as anonymised or aggregated audience segments (for example, \"weekly active golfers at clubs in a region\") for targeting sponsored placements — never your name, contact details, or individual receipt data.",
      "Service providers who help us run the platform (hosting, payments, analytics, OCR), bound by their own confidentiality obligations to us.",
      "We don't sell personal information.",
    ],
  },
  {
    heading: "6. How long we keep it",
    body: [
      "We keep account and transaction data for as long as your account is active, plus a limited period afterwards for fraud review, dispute resolution, and legal/accounting requirements.",
    ],
  },
  {
    heading: "7. Your rights under POPIA",
    body: [
      "You can ask us to confirm what personal information we hold about you, correct inaccurate information, or delete your account and associated data, subject to information we're required to retain by law.",
      "To exercise these rights, contact our Information Officer at [ SUPPORT@DOMAIN ]. You can also lodge a complaint with the Information Regulator of South Africa.",
    ],
  },
  {
    heading: "8. Security",
    body: [
      "We use reasonable technical and organisational measures to protect personal information against loss, unauthorised access, and disclosure, including encryption in transit and access controls on club and admin accounts.",
    ],
  },
  {
    heading: "9. Children",
    body: [
      "Flagrr is not directed at children, and account holders are expected to be adults capable of entering into these terms in their own right.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    body: [
      "We may update this policy as the product changes. Material changes will be flagged in the app.",
    ],
  },
  {
    heading: "11. Contact",
    body: ["Privacy questions or requests: [ SUPPORT@DOMAIN ]."],
  },
];
