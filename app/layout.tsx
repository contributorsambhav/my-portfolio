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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
