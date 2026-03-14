import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://scripts.clarity.ms https://www.googleadservices.com https://t.contentsquare.net https://bat.bing.com https://bat.bing.net",
  "worker-src 'self' blob:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms https://*.supabase.co https://t.contentsquare.net https://*.contentsquare.net https://bat.bing.com https://bat.bing.net",
  "frame-src 'self' https://www.google.com https://www.googletagmanager.com https://tagmanager.google.com",
].join('; ');

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: true,
    // Gebruik inline zodat afbeeldingen normaal weergegeven worden en niet als download worden afgedwongen
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Redirects voor oude/verkeerde URLs die 404 geven in Search Console
  async redirects() {
    return [
      {
        source: '/bouwcreatie-pids',
        destination: '/renovatie',
        permanent: true,
      },
      {
        source: '/budget-tool',
        destination: '/offerte',
        permanent: true,
      },
      {
        source: '/bouwcreatie:path*',
        destination: '/renovatie',
        permanent: true,
      },
    ];
  },

  // SEO and Security optimizations
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Add empty turbopack config to silence the warning
  turbopack: {},

  // Optional: enable bundle analyzer via separate script if needed
};

export default nextConfig;
