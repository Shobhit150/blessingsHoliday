import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomStickyBar from "@/components/BottomStickyBar";
import RightSideBar from "@/components/RightSideBar";
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blessings Holiday - Curated Group Trips from Delhi",
  description: "Join fun-filled weekend group trips from Delhi to Jim Corbett, Nainital, Manali, Sariska & more. Book your adventure today!",
  keywords: "Delhi group trips, Jim Corbett, Nainital, Manali, Sariska, weekend getaways, adventure travel",
  openGraph: {
    title: "Blessings Holiday",
    description: "Curated group trips for young travelers. Adventure, fun, and new friendships await!",
    url: "https://www.blessingsholiday.com",
    siteName: "Blessings Holiday",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://www.blessingsholiday.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        {children}
        <BottomStickyBar />
        <RightSideBar/>
        <SpeedInsights />
        <Analytics />
      </body>
      
    </html>
  );
}
