import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { PerformanceMonitor, DatadogRUM } from "@/components/ClientOnlyComponents";
import { generateLocalBusinessSchema, generateServiceSchema, generateWebSiteSchema, generateOrganizationSchema, services } from "@/lib/structured-data";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-D3Z5L5RJ";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yannova.be"),
  title: "Ramen & Deuren | Gevelrenovatie Geraardsbergen & Vlaamse Ardennen | Yannova",
  description:
    "Yannova: specialist in ramen, deuren en gevelrenovatie in Geraardsbergen, Ninove, Ronse en de Vlaamse Ardennen. Gratis opmeting, offerte binnen 24u. 15+ jaar ervaring. PVC & aluminium, crepi, isolatie.",
  keywords: [
    "ramen geraardsbergen",
    "gevelrenovatie geraardsbergen",
    "renovatie geraardsbergen",
    "aannemer geraardsbergen",
    "crepi geraardsbergen",
    "gevelisolatie geraardsbergen",
    "ramen ninove",
    "renovatie ninove",
    "ramen ronse",
    "renovatie ronse",
    "ramen zottegem",
    "ramen oudenaarde",
    "ramen aalst",
    "aannemer vlaamse ardennen",
    "renovatie vlaamse ardennen",
    "gevelrenovatie vlaamse ardennen",
    "totaalrenovatie vlaamse ardennen",
  ],
  alternates: {
    languages: {
      'nl-BE': 'https://www.yannova.be',
    },
  },
  openGraph: {
    title: "Ramen & Deuren | Gevelrenovatie Geraardsbergen & Vlaamse Ardennen | Yannova",
    description:
      "Yannova: specialist in ramen, deuren, crepi en gevelrenovatie in Geraardsbergen, Ninove, Ronse en de Vlaamse Ardennen. Gratis opmeting, offerte binnen 24u. 15+ jaar ervaring.",
    url: "https://www.yannova.be",
    type: "website",
    locale: "nl_BE",
    siteName: "Yannova Bouw",
    images: [
      {
        url: "https://www.yannova.be/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yannova - Ramen, Deuren & Renovatie in de Vlaamse Ardennen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramen & Deuren | Gevelrenovatie Geraardsbergen & Vlaamse Ardennen | Yannova",
    description:
      "Yannova: specialist in ramen, deuren, crepi en gevelrenovatie in Geraardsbergen, Ninove, Ronse en de Vlaamse Ardennen. Gratis opmeting, offerte binnen 24u.",
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
    "geo.region": "BE-VOV",
    "geo.placename": "Geraardsbergen",
    "geo.position": "50.7667;3.8833",
    ICBM: "50.7667, 3.8833",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512" },
    ],
  },
  verification: {
    google: "IuTf3i7Tc8GnysVMp6-Yp-jLR2IW4H1dOkr6Kh3nzU4",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  themeColor: "#ff6b00",
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
      <body className={inter.className}>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://t.contentsquare.net" />

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script
          id="contentsquare-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function loadContentsquare() {
                  if (window._uxa) return;
                  var script = document.createElement('script');
                  script.src = 'https://t.contentsquare.net/uxa/a86d93511a08f.js';
                  script.async = true;
                  document.head.appendChild(script);
                }
                
                var consent = localStorage.getItem('cookieConsent');
                if (consent === 'accepted') {
                  loadContentsquare();
                } else {
                  window.addEventListener('storage', function(e) {
                    if (e.key === 'cookieConsent' && e.newValue === 'accepted') {
                      loadContentsquare();
                    }
                  });
                }
              })();
            `
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Analytics: Suspense required because Analytics uses usePathname */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <PerformanceMonitor />
        <DatadogRUM />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
