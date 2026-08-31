/**
 * Site-wide constants. Environment values are inlined at build time by Next
 * (all NEXT_PUBLIC_*), so they are safe to read from server and client alike.
 */

export const SITE_NAME = 'WA WEB ULTRA';
export const SITE_TAGLINE = 'Privacy & Tools for WhatsApp Web';
export const VERSION = '1.0.13';
export const COMPAT = 'Chrome, Edge & Brave 111+';

/** Shown as "Last updated" on the legal pages. Update this on each deploy that
 *  changes the policy text (the /privacy date is what the Chrome Web Store sees). */
export const LEGAL_UPDATED = '2026-08-26';

/** Chrome Web Store item URL. Now published — the CTA buttons link straight to
 *  the listing. Set NEXT_PUBLIC_STORE_URL to override (e.g. staging). */
export const STORE_URL =
  process.env.NEXT_PUBLIC_STORE_URL ||
  'https://chromewebstore.google.com/detail/bplobfflbfgfhcicoclajambiehdbjfl?utm_source=item-share-cb';

/** Public contact address. Set NEXT_PUBLIC_SUPPORT_EMAIL to override. */
export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'mharoonsadiq8@gmail.com';

/** GA4 Measurement ID. Empty disables analytics AND the cookie bar entirely. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

/** Absolute origin for canonical URLs / OpenGraph / sitemap. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://wawebultra.com'
).replace(/\/$/, '');

// Homepage section anchors (smooth-scroll) + the Changelog page. The full
// Privacy Policy page lives at /privacy and is linked from the footer.
export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '/#top' },
  { label: 'Working', href: '/#working' },
  { label: 'Features', href: '/#features' },
  { label: 'Privacy', href: '/#privacy' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Changelog', href: '/#changelog' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/#features' },
    { label: 'How it works', href: '/#how' },
    { label: 'Support', href: '/support' },
    { label: 'Changelog', href: '/#changelog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const;

export const DISCLAIMER =
  'WA WEB ULTRA is an independent project and is not affiliated with, endorsed by, or sponsored by WhatsApp or Meta Platforms, Inc. "WhatsApp" is a trademark of Meta Platforms, Inc.';
