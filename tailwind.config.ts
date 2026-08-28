import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Every value flips with the theme via CSS variables (see globals.css).
        brand: 'var(--brand)',
        'brand-deep': '#04231c',
        'brand-ink': 'var(--brand-ink)',
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        card: 'var(--card)',
        line: 'var(--line)',
        ink: 'var(--text)',
        muted: 'var(--text-muted)',
        nav: 'var(--nav)',
        // The deliberately-dark privacy band — dark in BOTH themes.
        band: 'var(--band)',
        'band-text': 'var(--band-text)',
        'band-muted': 'var(--band-muted)',
        'band-line': 'var(--band-line)',
        warn: 'var(--warn)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        ctl: '12px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,20,26,0.05), 0 10px 30px -12px rgba(11,20,26,0.12)',
        lift: '0 2px 4px rgba(11,20,26,0.06), 0 18px 44px -16px rgba(11,20,26,0.18)',
      },
      maxWidth: {
        prose: '72ch',
      },
      keyframes: {
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.4s ease both',
      },
    },
  },
  plugins: [],
};

export default config;
