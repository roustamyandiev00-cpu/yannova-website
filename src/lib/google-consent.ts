/**
 * Google Consent Mode V2 helpers.
 * Must run after user accepts/declines cookies so Ads + GA4 can track legally.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function updateGoogleConsent(granted: boolean) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  });

  window.gtag('set', 'ads_data_redaction', !granted);
}

export function applyStoredGoogleConsent() {
  try {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') updateGoogleConsent(true);
    else if (consent === 'declined') updateGoogleConsent(false);
  } catch {
    // localStorage unavailable (private browsing restrictions)
  }
}
