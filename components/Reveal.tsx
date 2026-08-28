'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type State = 'idle' | 'hidden' | 'shown';

/**
 * Reveal-on-scroll that can NEVER leave content hidden:
 *  - Server render / no JS → visible (state 'idle').
 *  - Reduced motion or no IntersectionObserver → shown immediately.
 *  - Already in view on mount → shown without hiding (no flash, no pointless anim).
 *  - Below the fold → hidden, then animated in when scrolled into view.
 *  - Safety net: shown after 2s regardless, so a misfiring observer can't blank
 *    a section.
 * Uses inline styles only, so it depends on no global CSS class.
 */
export function Reveal({
  children,
  className,
  as: Tag = 'div',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<State>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setState('shown');
      return;
    }
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setState('shown');
      return;
    }

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setState('shown');
      return;
    }

    setState('hidden');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState('shown');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    io.observe(el);
    const t = window.setTimeout(() => setState('shown'), 2000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const hidden = state === 'hidden';
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? 'translateY(16px)' : 'none',
        transition:
          state === 'shown'
            ? `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
            : undefined,
        willChange: hidden ? 'opacity, transform' : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
