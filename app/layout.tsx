import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomStickyBar from "@/components/BottomStickyBar";
import RightSideBar from "@/components/RightSideBar";
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from "nextjs-google-analytics";
import ClientAnalytics from "@/components/ClientAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata = {
  title: "Blessings Holiday | Group Travel Adventures",
  description: "Explore curated travel experiences with Blessings Holiday. Group trips, nature getaways, and unforgettable journeys across India.",
  keywords: ["travel", "group trips", "Blessings Holiday", "trekking", "nature"],
  metadataBase: new URL("https://www.blessingsholiday.com"),
  openGraph: {
    title: "Blessings Holiday",
    description: "Your next adventure starts here.",
    url: "https://www.blessingsholiday.com",
    siteName: "Blessings Holiday",
    images: [
      {
        url: "/images/logo5.webp",
        width: 1200,
        height: 630,
        alt: "Blessings Holiday",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessings Holiday",
    description: "Your next adventure starts here.",
    images: ["/images/logo5.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        

        {/* SEO: Google site verification */}
        <meta name="google-site-verification" content="xqCFsqBWvYxFZ-yQRVtLwam1g7UQiUqqFl4U7tWg3Vk" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Apple icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Web manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Mask icon for Safari pinned tabs */}
        <link rel="mask-icon" href="/logo10.svg" color="#5bbad5" />

        {/* Theme color */}
        <meta name="theme-color" content="#ffffff" />

        {/* Viewport and charset */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        {children}
        <BottomStickyBar />
        <RightSideBar />
        <ClientAnalytics/>
        <SpeedInsights />
        <Analytics />
      </body>

    </html>
  );
}
