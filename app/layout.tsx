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
  title: "Texus — Custom Pools, Crafted in Texas",
  description:
    "Texus designs and builds bespoke residential pools, spas, and outdoor living spaces across Texas. Architecture-grade craftsmanship, family-owned since 1998.",
  openGraph: {
    title: "Texus — Custom Pools, Crafted in Texas",
    description:
      "Bespoke pools, spas and outdoor living. Architecture-grade craftsmanship.",
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
      <body className="min-h-full flex flex-col grain bg-background text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
