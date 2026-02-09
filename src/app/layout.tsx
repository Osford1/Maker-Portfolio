import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Teo Yu Dong Maker Portfolio",
    template: "%s | Teo Yu Dong",
  },
  description:
    "A maker portfolio featuring robotics, humanoid systems, mobile robotics, and fabrication projects by Teo Yu Dong.",
  keywords: ["robotics", "maker", "mechatronics", "fabrication", "portfolio"],
  openGraph: {
    title: "Teo Yu Dong Maker Portfolio",
    description:
      "Robotics, fabrication, and hands-on engineering projects by Teo Yu Dong.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        <SiteHeader />
        <main className="pb-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
