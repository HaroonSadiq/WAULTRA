import type { Metadata } from 'next';
import { DocLayout } from '@/components/DocLayout';
import { pageMeta } from '@/lib/seo';
import { DISCLAIMER, LEGAL_UPDATED, SITE_NAME, SUPPORT_EMAIL } from '@/content/site';

export const dynamic = 'force-static';
export const metadata: Metadata = pageMeta({
  title: 'Terms of Use',
  description: `Plain terms of use for ${SITE_NAME}, a free, local-only browser extension.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <DocLayout
      title="Terms of Use"
      updated={LEGAL_UPDATED}
      intro={`${SITE_NAME} is a free browser extension that runs on your own device. These terms are intentionally short.`}
    >
      <h2>The extension is provided free and as-is</h2>
      <p>
        {SITE_NAME} is provided free of charge, without warranty of any kind. To the fullest extent
        permitted by law, we are not liable for any loss or damage arising from your use of it. You
        use it at your own discretion and risk.
      </p>

      <h2>What you can expect</h2>
      <ul>
        <li>It runs locally in your browser on web.whatsapp.com.</li>
        <li>It has no accounts, no subscriptions, and no payment of any kind.</li>
        <li>It stores your settings on your device only, and transmits nothing to us.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>
        Use the extension lawfully and responsibly, and in line with the terms of the services you
        access with it. Do not use it to harass, deceive, or harm others. You are responsible for how
        you use the tools it provides.
      </p>

      <h2>No affiliation</h2>
      <p>{DISCLAIMER}</p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The date at the top reflects the latest version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </DocLayout>
  );
}
