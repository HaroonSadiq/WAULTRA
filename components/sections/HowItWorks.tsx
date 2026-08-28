import { HOW_IT_WORKS } from '@/content/copy';
import { Reveal } from '../Reveal';

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Up and running in a minute
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map(({ step, title, body }, i) => (
            <Reveal
              as="li"
              key={step}
              delay={i * 80}
              className="relative rounded-card border border-line bg-card p-6 shadow-card"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand font-mono text-sm font-bold text-brand-ink">
                {step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
