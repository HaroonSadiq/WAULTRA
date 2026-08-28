import { FINAL_CTA } from '@/content/copy';
import { StoreButton } from '../StoreButton';

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-card px-6 py-14 text-center sm:px-10"
        style={{
          background: 'linear-gradient(135deg, var(--brand) 0%, #04231c 120%)',
        }}
      >
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {FINAL_CTA.headline}
        </h2>
        <div className="mt-8 flex justify-center">
          <StoreButton
            placement="final_cta"
            variant="big"
            label={FINAL_CTA.cta}
            className="!bg-white !text-brand-deep shadow-lift"
          />
        </div>
        <p className="mt-5 text-sm text-white/90">{FINAL_CTA.sub}</p>
      </div>
    </section>
  );
}
