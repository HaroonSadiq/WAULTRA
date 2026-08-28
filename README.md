# WA WEB ULTRA — marketing site

Production marketing site + legal pages for the **WA WEB ULTRA** Chrome extension.
Next.js 15 (App Router, TypeScript strict) + Tailwind, static-first, deployed on
Vercel. The `/privacy` page is the URL you submit to the Chrome Web Store as the
extension's privacy policy.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

Node 20+ and npm. No other package manager lockfiles.

## Configuration (environment variables)

Copy `.env.example` to `.env.local` and fill in. Everything has a safe fallback,
so the site runs with none of them set.

| Variable                     | Purpose                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_STORE_URL`      | Chrome Web Store item URL. **While unset, every "Add to Chrome" button renders as a disabled "Coming soon to the Chrome Web Store" state.** Set it to go live. |
| `NEXT_PUBLIC_SUPPORT_EMAIL`  | Public contact email (footer, `/support`, `/privacy`). Defaults to a placeholder. |
| `NEXT_PUBLIC_GA_ID`          | GA4 Measurement ID (`G-…`). **Leave empty to disable analytics AND the cookie bar entirely** — keep it empty for local dev and preview deploys. |
| `NEXT_PUBLIC_SITE_URL`       | Absolute origin for canonical URLs, OpenGraph and the sitemap.                    |

**Where to change common things:**

- Store URL / support email / GA ID → environment variables above.
- Site version (SEO + changelog) → `VERSION` in `content/site.ts` and the top
  entry in `content/changelog.ts`.
- Feature copy → `content/` (typed modules: `features.ts`, `copy.ts`, `faq.ts`,
  `changelog.ts`, `site.ts`). The feature grid's single source of truth is the
  `FEATURES` array in `content/features.ts` — keep it in sync with the audited
  store build.
- Legal "Last updated" date → `LEGAL_UPDATED` in `content/site.ts`.

## Analytics & consent

- GA4 loads only when `NEXT_PUBLIC_GA_ID` is set, via `@next/third-parties/google`.
- Consent Mode v2 starts with everything **denied**; a small, non-modal cookie
  bar (bottom-left) lets visitors Accept or Decline. The choice persists in
  `localStorage` and the bar never reappears.
- Three anonymous, aggregate events only: `page_view`, `store_cta_click`
  (`placement`), `faq_open` (`question_id`).
- **`store_cta_click` counts button clicks, not installs.** Install counts,
  uninstalls, weekly users and the per-country install breakdown live in the
  Chrome Web Store developer dashboard — never label a click number "downloads".
- Set GA data retention to 2 months and leave Google Signals / User-ID off, in
  the GA property settings.

## Screenshots

Put real captures in `public/screens/` (see the README there for filenames and
rules). **Demo contacts only — never real names or numbers.** Missing files fall
back to labelled placeholders, so the build never breaks.

## Deploy to Vercel

1. Push this folder to a Git repo (or set it as the Vercel project **Root
   Directory** if it lives in a subfolder of a larger repo).
2. Import into Vercel — framework is auto-detected (Next.js), zero config.
3. Add the environment variables above in **Project → Settings → Environment
   Variables** (Production). Leave `NEXT_PUBLIC_GA_ID` unset on Preview to keep
   previews analytics-free.
4. Deploy. The OpenGraph image is generated at build (`app/opengraph-image.tsx`)
   and the favicon is `app/icon.svg` — both are the site's own "W+" shield mark,
   not WhatsApp's.

## Notes on scope

The copy is deliberately constrained to the **audited, store-safe feature set**.
The site never mentions any feature outside that set, never reproduces WhatsApp's
logo/wordmark, and never overclaims the PIN lock as encryption. Keep it that way —
those constraints are what protect the store listing.
