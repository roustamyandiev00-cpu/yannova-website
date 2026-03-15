import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import dynamic from "next/dynamic";
import { generateLocalBusinessSchema, generateServiceSchema, generateWebSiteSchema, generateOrganizationSchema, services } from "@/lib/structured-data";

const PerformanceMonitor = dynamic(() => import("@/components/PerformanceMonitor").then(m => ({ default: m.PerformanceMonitor })), { ssr: false });
const DatadogRUM = dynamic(() => import("@/components/DatadogRUM").then(m => ({ default: m.DatadogRUM })), { ssr: false });

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-D3Z5L5RJ";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yannova.be"),
  title: "Ramen & Deuren Zoersel | Gevelrenovatie & Crepi Antwerpen | Yannova",
  description:
    "Yannova: specialist in ramen, deuren en gevelrenovatie in Zoersel, Antwerpen en omgeving. Gratis opmeting, offerte binnen 24u. 15+ jaar ervaring. PVC & aluminium, crepi, isolatie.",
  keywords: [
    "ramen zoersel",
    "deuren zoersel",
    "ramen plaatsen antwerpen",
    "deuren antwerpen",
    "crepi zoersel",
    "gevelrenovatie zoersel",
    "gevelisolatie antwerpen",
    "renovatiebedrijf antwerpen",
    "ramen antwerpen stad",
    "ramen brasschaat",
    "ramen schoten",
    "gevelrenovatie antwerpen",
    "totaalrenovatie antwerpen",
  ],
  alternates: {
    languages: {
      'nl-BE': 'https://www.yannova.be',
    },
  },
  openGraph: {
    title: "Ramen & Deuren Zoersel | Gevelrenovatie & Crepi Antwerpen | Yannova",
    description:
      "Yannova: specialist in ramen, deuren, crepi en gevelrenovatie in Zoersel, Antwerpen en omgeving. Gratis opmeting, offerte binnen 24u. 15+ jaar ervaring.",
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
    title: "Ramen & Deuren Zoersel | Gevelrenovatie & Crepi Antwerpen | Yannova",
    description:
      "Yannova: specialist in ramen, deuren, crepi en gevelrenovatie in Zoersel, Antwerpen en omgeving. Gratis opmeting, offerte binnen 24u.",
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
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://t.contentsquare.net" />
        
        {/* PWA and mobile optimization */}
        <meta name="theme-color" content="#ff6b00" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Analytics />        <Script
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
      </head>
      <body className={inter.className}>
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
