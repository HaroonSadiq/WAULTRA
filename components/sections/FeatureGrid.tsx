import { FEATURES } from '@/content/features';
import { Reveal } from '../Reveal';

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything else it does
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A set of quiet, local tools that make WhatsApp Web faster to work in — no account, no
            cloud, nothing uploaded.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ id, title, blurb, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={id}
              delay={(i % 3) * 60}
              className="group rounded-card border border-line bg-card p-5 shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:border-brand hover:shadow-lift"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-ctl bg-bg-2 text-brand">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{blurb}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
