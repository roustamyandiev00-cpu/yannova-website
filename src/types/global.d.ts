/**
 * Global TypeScript declarations
 * Extends Window interface for third-party scripts
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

export {};
