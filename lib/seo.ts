import type { Metadata } from 'next';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/content/site';

export const DEFAULT_DESCRIPTION =
  'Blur private chats, lock WhatsApp Web behind a PIN, save statuses and stay organized — on your device, no account.';

/** Per-route metadata with canonical + OpenGraph + Twitter, all resolved
 *  against metadataBase (set in the root layout). */
export function pageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — ${SITE_TAGLINE}`;
  const canonical = path;
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
