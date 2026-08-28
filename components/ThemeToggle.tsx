'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';
const KEY = 'awp_theme';

function systemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Two-state toggle. First visit reflects the OS preference; the first click
 *  pins an explicit choice (stamped on <html> and persisted). The no-flash
 *  script in <head> applies any stored choice before first paint. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: Theme | null = null;
    try {
      const v = localStorage.getItem(KEY);
      if (v === 'light' || v === 'dark') stored = v;
    } catch {
      /* storage blocked — fall back to system */
    }
    setTheme(stored ?? systemTheme());
    setReady(true);
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-ctl border border-line bg-card text-ink transition-colors hover:bg-bg-2"
    >
      {/* Render a stable icon until mounted to avoid a hydration mismatch. */}
      {ready && isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
