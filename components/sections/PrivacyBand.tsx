import Link from 'next/link';
import { Check } from 'lucide-react';
import { PRIVACY_BAND, PRIVACY_BAND_ITEMS } from '@/content/copy';
import { PermissionTable } from '../PermissionTable';

/** The visual spine: a deliberately-dark band in BOTH themes. Every claim in the
 *  left column is scoped to the EXTENSION; the website's own analytics is called
 *  out separately so the two are never blurred together. */
export function PrivacyBand() {
  return (
    <section id="privacy" className="scroll-mt-20 bg-band text-band-text">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-band-text sm:text-4xl">
          {PRIVACY_BAND.headline}
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — what the EXTENSION does */}
          <div>
            <ul className="space-y-4">
              {PRIVACY_BAND_ITEMS.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-brand">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-band-text">{label}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-band-muted">
              ({PRIVACY_BAND.websiteNote}{' '}
              <Link
                href="/privacy#website"
                className="font-medium text-brand underline underline-offset-2"
              >
                Details
              </Link>
              .)
            </p>
          </div>

          {/* Right — what it can REACH */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-band-muted">
              What it can reach
            </h3>
            <PermissionTable variant="band" />
          </div>
        </div>

        <p className="mt-10 flex items-start gap-3 border-t border-band-line pt-8 text-lg text-band-text">
          <Check size={22} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          <span>
            {PRIVACY_BAND.closing}{' '}
            <Link href="/privacy" className="font-medium text-brand underline underline-offset-2">
              Read the full privacy policy
            </Link>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
