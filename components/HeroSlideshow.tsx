'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface Slide {
  src: string;
  alt: string;
}

/**
 * A single browser-chrome frame that crossfades through several screenshots on a
 * timer. Pauses on hover/focus, jumps on a dot click, and — under
 * prefers-reduced-motion — stops auto-advancing and swaps instantly.
 */
export function HeroSlideshow({
  slides,
  aspect = '1357 / 575',
  interval = 2000,
}: {
  slides: Slide[];
  aspect?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce.current || paused || slides.length < 2) return;
    const id = window.setInterval(
      () => setIndex((p) => (p + 1) % slides.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [paused, slides.length, interval]);

  return (
    <div
      className="overflow-hidden rounded-card border border-line bg-card shadow-lift"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Screenshots of WA WEB ULTRA"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-bg-2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-danger" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-warn" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden="true" />
      </div>

      <div className="relative bg-bg-2" style={{ aspectRatio: aspect }}>
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={clsx(
              'absolute inset-0 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
              i === index ? 'z-10 scale-100 opacity-100' : 'scale-[1.03] opacity-0',
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-2 border-t border-line bg-bg-2 py-2.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1} of ${slides.length}`}
              aria-current={i === index}
              className={clsx(
                'h-2 rounded-full transition-all duration-300',
                i === index ? 'w-6 bg-brand' : 'w-2 bg-line hover:bg-muted',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
