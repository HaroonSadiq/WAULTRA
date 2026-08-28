import { CHANGELOG } from '@/content/changelog';
import { Reveal } from '../Reveal';

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`;
}

/** Version catalog as a homepage section (#changelog), so the nav item is a
 *  same-page smooth-scroll anchor like the others — no cross-page jump. The
 *  standalone /changelog page still exists for SEO / direct links. */
export function Changelog() {
  return (
    <section id="changelog" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What&apos;s new
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">Version history, newest first.</p>
        </div>

        <ol className="mt-12 space-y-12">
          {CHANGELOG.map((entry, i) => (
            <Reveal as="li" key={entry.version} delay={i * 60} className="relative">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-bold tracking-tight text-ink">v{entry.version}</h3>
                <time className="font-mono text-sm text-muted" dateTime={entry.date}>
                  {formatDate(entry.date)}
                </time>
              </div>
              <p className="mt-2 text-base text-muted">{entry.summary}</p>
              <ul className="mt-4 space-y-2">
                {entry.changes.map((c, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
