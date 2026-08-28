import Link from 'next/link';
import { Logo } from './Logo';
import { DISCLAIMER, FOOTER_LINKS, SITE_NAME, SUPPORT_EMAIL } from '@/content/site';

export function Footer() {
  const year = 2026; // static build; no runtime clock needed

  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_NAME} home`}>
              <Logo size={26} />
              <span className="text-sm font-bold tracking-tight text-ink">{SITE_NAME}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Privacy and productivity tools for WhatsApp Web — running entirely on your device.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Product</h3>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.product.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Legal</h3>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-sm text-ink transition-colors hover:text-brand"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-muted">{DISCLAIMER}</p>
          <p className="mt-3 text-xs text-muted">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
