/**
 * Analytics Event Tracker
 * Centralized tracking for Google Analytics, Clarity, and other analytics platforms
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

export type EventCategory = 
  | 'engagement'
  | 'conversion'
  | 'navigation'
  | 'video'
  | 'form'
  | 'cta'
  | 'scroll'
  | 'error';

export interface AnalyticsEvent {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

/**
 * Track custom event to Google Analytics
 */
export function trackEvent({ action, category, label, value, nonInteraction = false }: AnalyticsEvent) {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
    });
  }

  // Microsoft Clarity custom tags
  if (window.clarity) {
    window.clarity('set', category, action);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', { action, category, label, value });
  }
}

/**
 * Track page view
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title,
    });
  }
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number) {
  trackEvent({
    action: 'scroll_depth',
    category: 'scroll',
    label: `${percentage}%`,
    value: percentage,
    nonInteraction: true,
  });
}

/**
 * Track video play
 */
export function trackVideoPlay(videoTitle: string) {
  trackEvent({
    action: 'video_play',
    category: 'video',
    label: videoTitle,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    action: 'cta_click',
    category: 'cta',
    label: `${ctaName} - ${location}`,
  });
}

/**
 * Track form start
 */
export function trackFormStart(formName: string) {
  trackEvent({
    action: 'form_start',
    category: 'form',
    label: formName,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'form',
    label: formName,
  });
}

/**
 * Track phone click
 */
export function trackPhoneClick(location: string) {
  trackEvent({
    action: 'phone_click',
    category: 'conversion',
    label: location,
  });
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(location: string) {
  trackEvent({
    action: 'whatsapp_click',
    category: 'conversion',
    label: location,
  });
}

/**
 * Track service page view
 */
export function trackServiceView(serviceName: string) {
  trackEvent({
    action: 'service_view',
    category: 'engagement',
    label: serviceName,
  });
}

/**
 * Track error
 */
export function trackError(errorMessage: string, errorLocation: string) {
  trackEvent({
    action: 'error',
    category: 'error',
    label: `${errorLocation}: ${errorMessage}`,
  });
}

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string) {
  trackEvent({
    action: 'outbound_link',
    category: 'navigation',
    label: url,
  });
}

/**
 * Track file download
 */
export function trackDownload(fileName: string) {
  trackEvent({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
  });
}
