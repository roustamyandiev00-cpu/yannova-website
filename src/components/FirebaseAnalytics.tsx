'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

export function FirebaseAnalytics() {
  useEffect(() => {
    if (analytics) {
      // Log page view on mount
      logEvent(analytics, 'page_view', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  }, []);

  return null;
}

// Helper functie om custom events te loggen
export function logCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (analytics) {
    logEvent(analytics, eventName, params);
  }
}

// Specifieke events voor Yannova
export function logChatOpened() {
  logCustomEvent('chat_opened');
}

export function logChatMessageSent() {
  logCustomEvent('chat_message_sent');
}

export function logLeadSubmitted(source: string) {
  logCustomEvent('lead_submitted', { source });
}

export function logQuoteRequested(category: string) {
  logCustomEvent('quote_requested', { category });
}
