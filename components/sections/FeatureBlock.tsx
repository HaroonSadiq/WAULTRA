import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Screenshot } from '../Screenshot';
import { Reveal } from '../Reveal';

interface Props {
  eyebrow: string;
  headline: string;
  body: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  aspect?: string;
  /** true → image on the LEFT, copy on the right. */
  imageLeft?: boolean;
  children?: ReactNode;
}

export function FeatureBlock({
  eyebrow,
  headline,
  body,
  icon: Icon,
  image,
  alt,
  aspect,
  imageLeft = false,
  children,
}: Props) {
  return (
    <Reveal as="section" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={clsx(imageLeft && 'lg:order-2')}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Icon size={14} aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{body}</p>
          {children}
        </div>
        <div className={clsx(imageLeft && 'lg:order-1')}>
          <Screenshot src={image} alt={alt} aspect={aspect} sizes="(max-width: 1024px) 100vw, 560px" />
        </div>
      </div>
    </Reveal>
  );
}
