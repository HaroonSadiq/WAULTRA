'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONSENT_KEY } from '@/lib/analytics';

/** Small, non-modal consent bar (bottom-left). Only mounted when GA is enabled.
 *  GA starts denied via Consent Mode (see Analytics.tsx); Accept grants
 *  analytics_storage, Decline persists a refusal, and the bar never reappears
 *  once answered. It never covers content or the CTA. */
export function CookieBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* storage blocked */
    }
    if (choice === 'granted') {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    } else if (choice !== 'denied') {
      setShow(true); // undecided
    }
  }, []);

  function decide(granted: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
    } catch {
      /* ignore */
    }
    if (granted) {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 z-50 max-w-sm animate-fade-in rounded-card border border-line bg-card p-4 shadow-lift"
    >
      <p className="text-sm leading-relaxed text-ink">
        We use Google Analytics to count visits — aggregate stats only, no profiling.{' '}
        <Link href="/privacy#website" className="font-medium text-brand underline underline-offset-2">
          Details
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => decide(true)}
          className="rounded-ctl bg-brand px-3.5 py-2 text-sm font-semibold text-brand-ink transition hover:brightness-105"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide(false)}
          className="rounded-ctl border border-line bg-bg-2 px-3.5 py-2 text-sm font-semibold text-ink transition hover:bg-card"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
