import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { FaqList } from '@/components/FaqList';
import { pageMeta } from '@/lib/seo';
import { COMPAT, SITE_NAME, SUPPORT_EMAIL } from '@/content/site';
import { FAQ } from '@/content/faq';

export const dynamic = 'force-static';
export const metadata: Metadata = pageMeta({
  title: 'Support',
  description: `Answers, troubleshooting and contact for ${SITE_NAME}.`,
  path: '/support',
});

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Support</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Answers to the common questions, plus how to reach us. {SITE_NAME} works on WhatsApp Web in{' '}
        {COMPAT}.
      </p>

      <h2 className="mt-12 text-xl font-bold tracking-tight text-ink">Frequently asked questions</h2>
      <div className="mt-5">
        <FaqList />
      </div>

      <h2 className="mt-12 text-xl font-bold tracking-tight text-ink">Troubleshooting</h2>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
        <li>
          <strong className="text-ink">A feature isn&apos;t showing up.</strong> Reload the
          web.whatsapp.com tab. The extension re-applies itself after a reload; WhatsApp Web
          occasionally reshuffles its interface, and a refresh reattaches everything.
        </li>
        <li>
          <strong className="text-ink">The toolbar icon does nothing.</strong> Make sure you are on
          web.whatsapp.com in a desktop browser (Chrome, Edge or Brave 111+). The extension runs
          only there.
        </li>
        <li>
          <strong className="text-ink">I forgot my PIN.</strong> The PIN is stored only as a salted
          hash and cannot be recovered. Removing and reinstalling the extension clears local storage,
          including the PIN, and lets you set a new one (your other settings reset too).
        </li>
      </ul>

      <div className="mt-12 rounded-card border border-line bg-bg-2 p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-ink">
          <Mail size={20} className="text-brand" aria-hidden="true" />
          Contact us
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Still stuck, or found a bug? Email us and we&apos;ll help.
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-4 inline-flex items-center gap-2 rounded-ctl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:brightness-105"
        >
          {SUPPORT_EMAIL}
        </a>
      </div>
    </div>
  );
}
