'use client';

import Script from 'next/script';

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAds() {
  if (!GOOGLE_ADS_ID || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Google Tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}

// Helper functie voor conversie tracking
export function trackConversion(conversionLabel: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value || 0,
      currency: 'EUR',
    });
  }
}

// Event tracking helpers
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Specifieke tracking functies
export const trackFormSubmit = (formType: string = 'offerte') => {
  trackEvent('form_submit_offerte', {
    form_type: formType,
    value: 50,
    currency: 'EUR',
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    value: 20,
    currency: 'EUR',
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    value: 25,
    currency: 'EUR',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    value: 15,
    currency: 'EUR',
  });
};

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}
