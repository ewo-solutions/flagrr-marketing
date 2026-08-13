import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://flagrr.co.za"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
