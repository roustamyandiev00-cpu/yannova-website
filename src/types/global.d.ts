/**
 * Global TypeScript declarations
 * Extends Window interface for third-party scripts
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
    uetq?: unknown[] | { push: (...args: unknown[]) => void };
  }
}

export {};
