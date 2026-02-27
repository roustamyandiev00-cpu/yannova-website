import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { StickyCTA } from "@/components/StickyCTA";
import { generateLocalBusinessSchema, generateServiceSchema, services } from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yannova Bouw - Ramen, Deuren en Renovatie in Zoersel",
  description: "Specialist in ramen, deuren, gevelrenovatie, crepi en totaalrenovatie in regio Zoersel, Antwerpen en Mechelen.",
};

// Combine LocalBusiness + Services schemas
const jsonLd = [
  generateLocalBusinessSchema(),
  ...services.map(generateServiceSchema),
];

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
        <FirebaseAnalytics />
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
