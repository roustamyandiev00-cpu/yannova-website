import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { StickyCTA } from "@/components/StickyCTA";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { generateLocalBusinessSchema, generateServiceSchema, generateWebSiteSchema, generateOrganizationSchema, services } from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yannova.be"),
  title: "Ramen, Deuren & Renovatie in Antwerpen (Stad + Rand) | Yannova",
  description:
    "Yannova plaatst ramen en deuren en voert renovaties uit in Antwerpen stad, Berchem, Deurne, Merksem, Wilrijk en randgemeenten rond Antwerpen. Gratis opmeting en offerte binnen 24 uur.",
  keywords: [
    "ramen antwerpen",
    "deuren antwerpen",
    "ramen antwerpen stad",
    "ramen berchem",
    "ramen deurne",
    "ramen merksem",
    "ramen wilrijk",
    "ramen brasschaat",
    "ramen schoten",
    "ramen wijnegem",
    "gevelrenovatie antwerpen",
    "totaalrenovatie antwerpen",
    "renovatiebedrijf antwerpen",
  ],
  alternates: {
    canonical: "https://www.yannova.be",
  },
  openGraph: {
    title: "Ramen, Deuren & Renovatie in Antwerpen (Stad + Rand) | Yannova",
    description:
      "Actief in Antwerpen stad en rond Antwerpen: ramen, deuren, gevelisolatie en renovatie. Gratis opmeting en duidelijke offerte binnen 24 uur.",
    url: "https://www.yannova.be",
    type: "website",
    locale: "nl_BE",
    siteName: "Yannova Bouw",
    images: [
      {
        url: "https://www.yannova.be/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yannova - Ramen, Deuren & Renovatie in Antwerpen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramen, Deuren & Renovatie in Antwerpen (Stad + Rand) | Yannova",
    description:
      "Ramen, deuren en renovatie in Antwerpen stad en randgemeenten. Gratis opmeting en offerte binnen 24 uur.",
    images: ["https://www.yannova.be/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BE-VAN",
    "geo.placename": "Antwerpen",
    "geo.position": "51.2194;4.4025",
    ICBM: "51.2194, 4.4025",
  },
  verification: {
    google: "IuTf3i7Tc8GnysVMp6-Yp-jLR2IW4H1dOkr6Kh3nzU4",
  },
};

// Combine all schemas: Website, Organization, LocalBusiness + Services
const jsonLd = [
  generateWebSiteSchema(),
  generateOrganizationSchema(),
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
        <GoogleTagManager />
        <Analytics />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vsu0sqq5xj");`
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        <PerformanceMonitor />
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
