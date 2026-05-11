import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
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
