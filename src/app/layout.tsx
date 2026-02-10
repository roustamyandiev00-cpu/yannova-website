import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { StickyCTA } from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yannova Bouw - Ramen, Deuren en Renovatie in Zoersel",
  description: "Specialist in ramen, deuren, gevelrenovatie, crepi en totaalrenovatie in regio Zoersel, Antwerpen en Mechelen.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Yannova Bouw",
  "image": "https://www.yannova.be/logo.png",
  "description": "Specialist in ramen, deuren, gevelrenovatie, crepi en totaalrenovatie.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zoersel",
    "addressRegion": "Antwerpen",
    "addressCountry": "BE"
  },
  "url": "https://www.yannova.be",
  "telephone": "+32489960001",
  "email": "info@yannova.be",
  "priceRange": "$$"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Chatbot />
        <ExitIntentPopup />
        <CookieConsent />
        <StickyCTA />
      </body>
    </html>
  );
}
