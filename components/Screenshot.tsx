'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

/**
 * A screenshot inside a neutral browser-chrome frame (16:10). If the file is
 * missing it falls back to a labelled placeholder rather than a broken image, so
 * the build and the layout survive a missing asset.
 *
 * TODO: drop real captures into /public/screens/ (hero.png, blur.png, lock.png,
 * presentation.png, quick-chat.png, personalize.png). Use DEMO contacts only —
 * never real names or numbers.
 */
export function Screenshot({
  src,
  alt,
  priority = false,
  className,
  aspect = '16 / 10',
  sizes = '(max-width: 768px) 100vw, 620px',
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** CSS aspect-ratio for the frame, e.g. "1357 / 575". Defaults to 16/10. */
  aspect?: string;
  sizes?: string;
}) {
  const [err, setErr] = useState(false);

  return (
    <div
      className={clsx(
        'overflow-hidden rounded-card border border-line bg-card shadow-lift',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-bg-2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-danger" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-warn" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden="true" />
      </div>
      <div className="relative bg-bg-2" style={{ aspectRatio: aspect }}>
        {err ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Screenshot
            </span>
            <span className="max-w-[85%] text-sm text-muted">{alt}</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-top"
            onError={() => setErr(true)}
          />
        )}
      </div>
    </div>
  );
}
