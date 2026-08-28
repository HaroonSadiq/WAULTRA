import { ArrowDown } from 'lucide-react';
import { HERO, TRUST_PILLS } from '@/content/copy';
import { StoreButton } from '../StoreButton';
import { HeroSlideshow } from '../HeroSlideshow';

const HERO_SLIDES = [
  {
    src: '/screens/ss1.png',
    alt: "WA WEB ULTRA's Privacy panel open on WhatsApp Web, with contact names and chats blurred.",
  },
  {
    src: '/screens/ss2.png',
    alt: 'The Personalize panel — choosing an accent color and a chat background.',
  },
  {
    src: '/screens/ss3.png',
    alt: 'Quick Chat — messaging a phone number without saving it as a contact.',
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-120px] -z-10 h-[620px]"
        style={{
          background:
            'radial-gradient(52% 52% at 72% 8%, var(--brand-glow), transparent 72%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {HERO.h1}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{HERO.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StoreButton placement="hero" variant="big" label={HERO.primary} />
            <a
              href="#working"
              className="inline-flex items-center justify-center gap-2 rounded-ctl border border-line bg-card px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-bg-2"
            >
              {HERO.secondary}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {TRUST_PILLS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-muted"
              >
                <Icon size={15} className="text-brand" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-2">
          <HeroSlideshow slides={HERO_SLIDES} interval={5000} />
        </div>
      </div>
    </section>
  );
}
