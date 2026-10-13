import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "AORÈN — AI Advertising Studio",
  description: "AI-generated video and image advertising for brands that want to move faster.",
  openGraph: { title: "AORÈN — AI Advertising Studio", description: "AI-generated video and image advertising.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning><body>{children}</body></html>;
}
