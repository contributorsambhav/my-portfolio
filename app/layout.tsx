// app/layout.tsx
import "./globals.css";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sambhav Gupta - Full Stack Developer & Web3 Enthusiast",
  description:
    "Portfolio of Sambhav Gupta - Full Stack Developer, Web3 Enthusiast, and Mathematics & Computing student at NIT Hamirpur. Explore my projects, hackathon wins, and blockchain journey.",
  keywords: [
    "Sambhav Gupta",
    "Full Stack Developer",
    "Web3",
    "Blockchain",
    "NIT Hamirpur",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Sambhav Gupta" }],
  openGraph: {
    title: "Sambhav Gupta - Full Stack Developer",
    description:
      "Portfolio showcasing web development, blockchain projects, and hackathon achievements",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://leetcode.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://leetcode.com" />
        <link rel="preconnect" href="https://github-contributions-api.jogruber.de" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github-contributions-api.jogruber.de" />
        <link rel="preconnect" href="https://codeforces.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://codeforces.com" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-950 text-gray-100`}>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}