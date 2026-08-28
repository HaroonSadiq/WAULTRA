import { Hero } from '@/components/sections/Hero';
import { FeatureBlock } from '@/components/sections/FeatureBlock';
import { BlurTargets } from '@/components/sections/BlurTargets';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { PrivacyBand } from '@/components/sections/PrivacyBand';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { BLOCKS } from '@/content/copy';
import { FAQ } from '@/content/faq';
import { SITE_NAME, SITE_URL, VERSION } from '@/content/site';

export const dynamic = 'force-static';

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  applicationCategory: 'BrowserApplication',
  operatingSystem: 'Chrome, Edge, Brave',
  softwareVersion: VERSION,
  url: SITE_URL,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Hero />

      {/* The three marquee feature blocks */}
      <div id="working" className="scroll-mt-20">
        <FeatureBlock
          eyebrow={BLOCKS.privacy.eyebrow}
          headline={BLOCKS.privacy.headline}
          body={BLOCKS.privacy.body}
          icon={BLOCKS.privacy.icon}
          image={BLOCKS.privacy.image}
          alt={BLOCKS.privacy.alt}
          aspect={BLOCKS.privacy.aspect}
          imageLeft
        >
          <BlurTargets />
        </FeatureBlock>

        <FeatureBlock
          eyebrow={BLOCKS.presentation.eyebrow}
          headline={BLOCKS.presentation.headline}
          body={BLOCKS.presentation.body}
          icon={BLOCKS.presentation.icon}
          image={BLOCKS.presentation.image}
          alt={BLOCKS.presentation.alt}
          aspect={BLOCKS.presentation.aspect}
        />

        <FeatureBlock
          eyebrow={BLOCKS.lock.eyebrow}
          headline={BLOCKS.lock.headline}
          body={BLOCKS.lock.body}
          icon={BLOCKS.lock.icon}
          image={BLOCKS.lock.image}
          alt={BLOCKS.lock.alt}
          aspect={BLOCKS.lock.aspect}
          imageLeft
        />
      </div>

      <FeatureGrid />
      <PrivacyBand />
      <HowItWorks />
      <Faq />
      <FinalCta />
    </>
  );
}
