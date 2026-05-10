import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Texas Custom Outdoors — Custom Pools, Spas & Outdoor Living in Greater Houston",
  description:
    "Texas Custom Outdoors designs and builds custom residential pools, spas, pergolas, outdoor kitchens and outdoor living across Greater Houston. Veteran-owned, 15 years of craftsmanship, transparent ground-up pricing.",
  openGraph: {
    title: "Texas Custom Outdoors — Custom Pools, Spas & Outdoor Living",
    description:
      "Custom pools, spas, pergolas and outdoor kitchens across Greater Houston. Veteran-owned. Transparent pricing. Free 3-D design.",
    type: "website",
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
      className={`${geistSans.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero/poster.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="video"
          href="/hero/hero-video.mp4"
          type="video/mp4"
        />
      </head>
      <body className="min-h-full flex flex-col grain bg-background text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
