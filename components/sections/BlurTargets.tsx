import { Check } from 'lucide-react';
import { BLUR_TARGETS } from '@/content/features';

/** Compact grouped checklist of everything the blur can target. Rendered inside
 *  the Privacy feature block. */
export function BlurTargets() {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-3">
      {BLUR_TARGETS.map((group) => (
        <div key={group.group}>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">{group.group}</h3>
          <ul className="mt-2 space-y-1.5">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <Check size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
