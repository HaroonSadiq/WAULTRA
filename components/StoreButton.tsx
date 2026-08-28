'use client';

import clsx from 'clsx';
import { Chrome } from 'lucide-react';
import { STORE_URL } from '@/content/site';
import { trackEvent } from '@/lib/analytics';

type Placement = 'header' | 'hero' | 'final_cta';
type Variant = 'primary' | 'big';

interface Props {
  placement: Placement;
  label?: string;
  variant?: Variant;
  className?: string;
  withIcon?: boolean;
}

/** "Add to Chrome" CTA. Until NEXT_PUBLIC_STORE_URL is set it renders as a
 *  disabled "Coming soon" button rather than a dead link. On click it fires a
 *  store_cta_click event tagged with its placement — which counts clicks, not
 *  installs (the install happens on Google's domain, out of our reach). */
export function StoreButton({
  placement,
  label = 'Add to Chrome — Free',
  variant = 'primary',
  className,
  withIcon = true,
}: Props) {
  const base = clsx(
    'inline-flex items-center justify-center gap-2 rounded-ctl font-semibold transition-all duration-150 focus-visible:outline-none',
    variant === 'big' ? 'px-7 py-3.5 text-base' : 'px-4 py-2.5 text-sm',
    className,
  );

  if (!STORE_URL) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="The extension is not published yet."
        className={clsx(
          base,
          'cursor-not-allowed border border-line bg-bg-2 text-muted',
        )}
      >
        {withIcon && <Chrome size={variant === 'big' ? 20 : 18} aria-hidden="true" />}
        Coming soon to the Chrome Web Store
      </button>
    );
  }

  return (
    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('store_cta_click', { placement })}
      className={clsx(
        base,
        'bg-brand text-brand-ink shadow-card hover:brightness-105 hover:shadow-lift active:translate-y-px',
      )}
    >
      {withIcon && <Chrome size={variant === 'big' ? 20 : 18} aria-hidden="true" />}
      {label}
    </a>
  );
}
