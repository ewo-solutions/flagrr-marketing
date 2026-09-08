import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL } from "@/lib/env";
import "./globals.css";

// Unset in local dev and any preview deploy. GA sets cookies, and this site
// doesn't have a privacy policy or cookie-consent banner yet, so this should
// only be set in production once those land — see .env.example.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Flagrr — The round pays you back.",
    template: "%s · Flagrr",
  },
  description:
    "Flagrr turns what members already spend at your club into a loyalty programme worth belonging to. Scan a receipt. Earn Flagrr Cash. Redeem it at the club.",
  // Same SITE_URL that drives the Payfast return/cancel URLs (see src/lib/env.ts) —
  // one source of truth so canonical/OG links can't drift from the deployed domain.
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: "Flagrr",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${poppins.variable}`}>
      <body>{children}</body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
