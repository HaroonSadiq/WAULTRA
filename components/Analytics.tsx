import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_ID } from '@/content/site';
import { CookieBar } from './CookieBar';

// Sets EVERY consent signal to denied (Consent Mode v2) before GA runs. Rendered
// as a raw inline script so it executes synchronously at parse time — ahead of
// GoogleAnalytics, which loads afterInteractive. The cookie bar later upgrades
// analytics_storage to granted only on an explicit Accept.
const CONSENT_DEFAULT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`;

/** Renders nothing when NEXT_PUBLIC_GA_ID is unset — no GA script, no cookie bar. */
export function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
      <GoogleAnalytics gaId={GA_ID} />
      <CookieBar />
    </>
  );
}
