'use client';

import dynamic from 'next/dynamic';

export const PerformanceMonitor = dynamic(
  () => import('@/components/PerformanceMonitor').then((m) => ({ default: m.PerformanceMonitor })),
  { ssr: false }
);

export const DatadogRUM = dynamic(
  () => import('@/components/DatadogRUM').then((m) => ({ default: m.DatadogRUM })),
  { ssr: false }
);

export const Chatbot = dynamic(
  () => import('@/components/Chatbot').then((m) => ({ default: m.Chatbot })),
  { ssr: false }
);

export const ExitIntentPopup = dynamic(
  () => import('@/components/ExitIntentPopup').then((m) => ({ default: m.ExitIntentPopup })),
  { ssr: false }
);

export const CookieConsent = dynamic(
  () => import('@/components/CookieConsent').then((m) => ({ default: m.CookieConsent })),
  { ssr: false }
);

export const StickyCTA = dynamic(
  () => import('@/components/StickyCTA').then((m) => ({ default: m.StickyCTA })),
  { ssr: false }
);
