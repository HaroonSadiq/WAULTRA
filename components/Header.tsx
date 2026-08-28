'use client';

import { useState, type MouseEvent } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { StoreButton } from './StoreButton';
import { NAV, SITE_NAME } from '@/content/site';

export function Header() {
  const [open, setOpen] = useState(false);

  // Guarantee a smooth scroll for the on-page anchors (Next's Link can hard-jump).
  // On any other route, let the Link navigate to /#hash normally. Honors
  // prefers-reduced-motion and the sections' scroll-margin-top (sticky header).
  function smoothTo(e: MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    const hash = href.includes('#') ? href.slice(href.indexOf('#') + 1) : '';
    if (!hash || typeof window === 'undefined' || window.location.pathname !== '/') return;
    const el = document.getElementById(hash);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${hash}`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-ctl" aria-label={`${SITE_NAME} home`}>
          <Logo size={28} />
          <span className="text-sm font-bold tracking-tight text-ink transition-colors sm:text-base">
            {SITE_NAME}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => smoothTo(e, item.href)}
              className="rounded-ctl px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-bg-2 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <StoreButton placement="header" />
          </div>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-ctl border border-line bg-card text-ink md:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className={clsx('border-t border-line bg-bg md:hidden', open ? 'block' : 'hidden')}>
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => smoothTo(e, item.href)}
              className="rounded-ctl px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-bg-2"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <StoreButton placement="header" className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
