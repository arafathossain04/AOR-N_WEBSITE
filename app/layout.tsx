import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

const SITE_URL = "https://theaoren.com"; // change to your real domain once it's connected

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AORÈN | AI Advertising Studio",
    template: "%s | AORÈN",
  },
  description:
    "AORÈN (AOREN) creates AI-generated video ads, Reels and image ad campaigns for the brands. Fast turnaround, packages from $199.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AORÈN | AI Advertising Studio",
    description: "AI-generated video and image ads for brands that want to move faster.",
    url: "/",
    siteName: "AORÈN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AORÈN AI advertising studio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AORÈN | AI Advertising Studio",
    description: "AI-generated video and image advertising.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AORÈN",
  alternateName: "AOREN",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "collab@theaoren.com", // replace with your real email
  sameAs: [
    "https://www.instagram.com/aoren001/",
    "https://www.linkedin.com/in/aorèn-001s/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AORÈN",
              alternateName: "AOREN",
              url: "https://theaoren.com",
              logo: "https://theaoren.com/logo.png",
              email: "collab@theaoren.com",
              sameAs: ["https://www.instagram.com/aoren001/", "https://www.linkedin.com/in/aorèn-001s/"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
