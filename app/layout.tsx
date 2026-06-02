import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://cobboston.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Community of Banyakigezi in Boston (COB)",
    template: "%s · COB Boston",
  },
  description:
    "The Community of Banyakigezi in Boston unites people with roots in Uganda's Kigezi region across Massachusetts and New England — fellowship, mentorship, and opportunity for current and future generations.",
  keywords: [
    "Banyakigezi",
    "Kigezi",
    "Boston",
    "New England",
    "Uganda diaspora",
    "Bakiga",
    "Bafumbira",
    "community",
  ],
  openGraph: {
    title: "Community of Banyakigezi in Boston (COB)",
    description:
      "Transforming shared heritage into opportunity, leadership, and lasting impact across Massachusetts and New England.",
    url: siteUrl,
    siteName: "COB Boston",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community of Banyakigezi in Boston (COB)",
    description:
      "Transforming shared heritage into opportunity, leadership, and lasting impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
