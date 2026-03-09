/**
 * Google Ads Conversion Tracking
 * 
 * Setup instructies:
 * 1. Ga naar Google Ads > Tools > Conversions
 * 2. Maak een nieuwe conversie aan (Website > Submit lead form)
 * 3. Kopieer de Conversion ID (AW-XXXXXXXXX) en Conversion Label
 * 4. Voeg toe aan .env.local:
 *    NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
 *    NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=xxxxxxxxxxxxx
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const trackContactFormSubmission = (value?: number) => {
  if (typeof window === 'undefined') return;
  
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL;
  
  if (!adsId || !conversionLabel) {
    console.warn('Google Ads tracking not configured');
    return;
  }

  // Track conversion met gtag
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${adsId}/${conversionLabel}`,
      value: value || 1.0,
      currency: 'EUR',
    });
    
    console.log('Google Ads conversion tracked:', `${adsId}/${conversionLabel}`);
  }
};

export const trackPhoneClick = () => {
  if (typeof window === 'undefined') return;
  
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  
  if (!adsId) return;

  if (window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'contact',
      event_label: 'Phone number clicked',
    });
  }
};

export const trackWhatsAppClick = () => {
  if (typeof window === 'undefined') return;
  
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  
  if (!adsId) return;

  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: 'WhatsApp clicked',
    });
  }
};
