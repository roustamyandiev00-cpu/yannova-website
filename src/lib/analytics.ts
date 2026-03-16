/**
 * Central GA4 analytics helpers
 * Single source of truth for all event tracking.
 * GTM dataLayer push is included so GTM triggers also fire.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// ─── Core helpers ────────────────────────────────────────────────────────────

/** Push to GTM dataLayer (safe no-op if not loaded) */
function dlPush(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Send event to GA4 via gtag (safe no-op if not loaded) */
function gtagEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

// ─── Page view ───────────────────────────────────────────────────────────────

/** Call on every route change in App Router */
export function trackPageView(url: string, title?: string) {
  gtagEvent('page_view', {
    page_path: url,
    page_title: title ?? document.title,
  });
  dlPush('page_view', { page_path: url });
}

// ─── Conversion events ───────────────────────────────────────────────────────

export function trackPhoneClick(location = 'unknown') {
  gtagEvent('phone_click', { event_category: 'conversion', event_label: location });
  dlPush('phone_click', { location });
}

export function trackWhatsAppClick(location = 'unknown') {
  gtagEvent('whatsapp_click', { event_category: 'conversion', event_label: location });
  dlPush('whatsapp_click', { location });
}

export function trackEmailClick(location = 'unknown') {
  gtagEvent('email_click', { event_category: 'conversion', event_label: location });
  dlPush('email_click', { location });
}

/**
 * Fire on successful contact/offerte form submit.
 * Uses GA4 recommended event name `generate_lead`.
 */
export function trackGenerateLead(formType = 'contact') {
  gtagEvent('generate_lead', {
    event_category: 'conversion',
    form_type: formType,
    currency: 'EUR',
    value: 50,
  });
  dlPush('generate_lead', { form_type: formType });

  // Also fire Google Ads conversion if configured
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL;
  if (adsId && label && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${adsId}/${label}`,
      value: 50,
      currency: 'EUR',
    });
  }
}

export function trackCtaClick(ctaLabel: string, location = 'unknown') {
  gtagEvent('cta_click', { event_category: 'engagement', cta_label: ctaLabel, location });
  dlPush('cta_click', { cta_label: ctaLabel, location });
}
