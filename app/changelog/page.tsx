import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { CHANGELOG } from '@/content/changelog';
import { SITE_NAME } from '@/content/site';

export const dynamic = 'force-static';
export const metadata: Metadata = pageMeta({
  title: 'Changelog',
  description: `Version history for ${SITE_NAME}.`,
  path: '/changelog',
});

function formatDate(iso: string): string {
  // Deterministic (no locale/runtime clock) so the static build is stable.
  const [y, m, d] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`;
}

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Changelog</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        What&apos;s new in {SITE_NAME}, newest first.
      </p>

      <ol className="mt-12 space-y-12">
        {CHANGELOG.map((entry) => (
          <li key={entry.version} className="relative">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-xl font-bold tracking-tight text-ink">v{entry.version}</h2>
              <time className="font-mono text-sm text-muted" dateTime={entry.date}>
                {formatDate(entry.date)}
              </time>
            </div>
            <p className="mt-2 text-base text-muted">{entry.summary}</p>
            <ul className="mt-4 space-y-2">
              {entry.changes.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
