'use client';

import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/content/faq';
import { trackEvent } from '@/lib/analytics';

/** Native <details>/<summary> accordion — no JS library. Fires faq_open with a
 *  stable slug (never the question text) when an item is opened. */
export function FaqList() {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-card">
      {FAQ.map((item) => (
        <details
          key={item.id}
          id={item.id}
          className="group"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) {
              trackEvent('faq_open', { question_id: item.id });
            }
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink transition-colors hover:bg-bg-2 [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-muted">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
