import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { pageMeta } from '@/lib/seo';
import { HOW_IT_WORKS } from '@/content/copy';
import { SITE_NAME } from '@/content/site';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  ...pageMeta({
    title: "You're all set",
    description: `${SITE_NAME} is installed — here's how to start.`,
    path: '/install',
  }),
  robots: { index: false, follow: true },
};

export default function InstallPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:py-24">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-bg-2 text-brand">
        <CheckCircle2 size={30} aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {SITE_NAME} is installed
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
        Here&apos;s how to start. Everything runs on your device — there&apos;s no account to create.
      </p>

      <ol className="mx-auto mt-10 max-w-md space-y-4 text-left">
        {HOW_IT_WORKS.map(({ step, title, body }) => (
          <li
            key={step}
            className="flex items-start gap-4 rounded-card border border-line bg-card p-5 shadow-card"
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-mono text-sm font-bold text-brand-ink">
              {step}
            </span>
            <div>
              <h2 className="font-semibold text-ink">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <a
          href="https://web.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-ctl bg-brand px-6 py-3 text-base font-semibold text-brand-ink transition hover:brightness-105"
        >
          Open WhatsApp Web
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <p className="mt-4 text-sm text-muted">
          Need help?{' '}
          <Link href="/support" className="font-medium text-brand underline underline-offset-2">
            Visit support
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
