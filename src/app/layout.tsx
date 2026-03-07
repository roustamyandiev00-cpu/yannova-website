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
  title: "Ramen & Deuren Plaatsen Zoersel, Antwerpen | Yannova - Gratis Offerte 24u",
  description: "Specialist ramen en deuren in Zoersel, Antwerpen, Schilde, Brasschaat. PVC & aluminium ramen, gevelrenovatie, totaalrenovatie. 15+ jaar ervaring. Gratis opmeting & offerte binnen 24u. Premie-advies. ✓ HR++ & drievoudig glas ✓ EPC-verbetering ✓ 30 jaar garantie",
  keywords: "ramen plaatsen Zoersel, deuren plaatsen Antwerpen, PVC ramen, aluminium ramen, gevelrenovatie, crepi, totaalrenovatie, energiezuinige ramen, HR++ glas, drievoudig glas, renovatiebedrijf Antwerpen, aannemer Zoersel, ramen Schilde, ramen Brasschaat, premies renovatie",
  openGraph: {
    title: "Ramen & Deuren Plaatsen Zoersel, Antwerpen | Yannova",
    description: "Specialist ramen, deuren & renovatie in Zoersel en regio Antwerpen. Gratis offerte binnen 24u. 15+ jaar ervaring.",
    type: "website",
    locale: "nl_BE",
    siteName: "Yannova Bouw",
  },
  robots: {
    index: true,
    follow: true,
  },
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
