/** Minimal GA4 event helper. Safe to call whether or not GA is loaded: if the
 *  ID is unset the gtag stub never exists and every call is a no-op. */

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export const CONSENT_KEY = 'awp_site_consent'; // 'granted' | 'denied'

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params ?? {});
}
