'use client';

import Script from 'next/script';

const GTM_ID = 'GTM-MZ98NM6L';

export function GoogleTagManager() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Helper functions for GTM events
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function gtmEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
}

// Specific tracking functions
export const gtmTrackFormSubmit = (formType: string = 'offerte') => {
  gtmEvent('form_submit', {
    form_type: formType,
    value: 50,
    currency: 'EUR',
  });
};

export const gtmTrackWhatsApp = () => {
  gtmEvent('whatsapp_click', {
    value: 20,
    currency: 'EUR',
  });
};

export const gtmTrackPhone = () => {
  gtmEvent('phone_click', {
    value: 25,
    currency: 'EUR',
  });
};

export const gtmTrackEmail = () => {
  gtmEvent('email_click', {
    value: 15,
    currency: 'EUR',
  });
};
