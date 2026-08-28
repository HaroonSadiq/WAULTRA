import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITE_NAME, SITE_TAGLINE } from '@/content/site';

export const dynamic = 'force-static';
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Brand OpenGraph image, generated at build. Embeds the extension's own icon so
 *  the social preview matches the site and the product. */
export default function OpengraphImage() {
  const icon = `data:image/png;base64,${readFileSync(
    join(process.cwd(), 'public', 'logo.png'),
  ).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          background: 'linear-gradient(135deg, #04231c 0%, #06301f 55%, #00352a 100%)',
          color: '#e9edef',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} width={92} height={92} alt="" />
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>{SITE_NAME}</span>
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Your WhatsApp Web, private by default.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: '#8696a0', maxWidth: 820 }}>
          Blur chats, lock the tab behind a PIN, and stay organized — all 100% on your device.
        </div>

        <div style={{ marginTop: 'auto', fontSize: 24, color: '#06cf9c', fontWeight: 600 }}>
          Free · Chrome, Edge &amp; Brave
        </div>
      </div>
    ),
    { ...size },
  );
}
