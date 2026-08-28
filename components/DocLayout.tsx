import type { ReactNode } from 'react';

/** Shared shell for the legal / support documents: centered ~72ch column with a
 *  title, optional "last updated" line, and the .doc typographic styling. */
export function DocLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated?: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-prose px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
      {updated && <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>}
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      <article className="doc mt-8">{children}</article>
    </div>
  );
}
