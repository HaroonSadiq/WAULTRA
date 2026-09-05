/**
 * Landing-page copy. Every claim is scoped to the extension and drawn from the
 * verified feature set. Trust pills deliberately omit any "no trackers" claim —
 * this website runs Google Analytics, and the extension's privacy is described
 * separately and precisely in the dark privacy band.
 */
import type { LucideIcon } from 'lucide-react';
import {
  MonitorSmartphone,
  UserX,
  ShieldCheck,
  Gift,
  Eye,
  MonitorOff,
  Lock,
  Server,
  KeyRound,
  Code2,
} from 'lucide-react';

export const HERO = {
  h1: 'Your WhatsApp Web, private by default.',
  sub: 'One click blurs names, messages and media. A PIN locks the whole tab. It runs on your computer — no servers of ours, no accounts, no sign-up.',
  primary: 'Add to Chrome — Free',
  secondary: 'See how it works',
};

export const TRUST_PILLS: ReadonlyArray<{ label: string; icon: LucideIcon }> = [
  { label: '100% on-device', icon: MonitorSmartphone },
  { label: 'No account needed', icon: UserX },
  { label: 'On-device by default', icon: ShieldCheck },
  { label: 'Free', icon: Gift },
];

export const CREDIBILITY =
  'An independent, open-about-what-it-does extension. It requests access to one website and talks to no server.';

/** The three alternating feature blocks. */
export const BLOCKS = {
  privacy: {
    eyebrow: 'Privacy · Blur',
    headline: 'Blur exactly what you want, and nothing else.',
    body: 'Turn on blur for just the things you care about — names, previews, message text, media, voice notes, or whole group panels. Reveal on hover un-blurs only what is under your cursor, so you can read one chat while the rest stays hidden. Tune the blur strength (1–20px) and the hover delay, or let it auto-blur after 30 seconds idle.',
    icon: Eye,
    image: '/screens/blur.png',
    aspect: '1363 / 598',
    alt: 'WhatsApp Web with sidebar names and a conversation blurred, one chat revealed under the cursor.',
  },
  presentation: {
    eyebrow: 'Privacy · Presentation Mode',
    headline: 'About to share your screen?',
    body: 'Presentation Mode blurs everything the instant you switch tabs or the window loses focus — and reveals it the moment you come back. No panic, no scrambling for the window before the call sees your chats.',
    icon: MonitorOff,
    image: '/screens/presentation.png',
    aspect: '1346 / 581',
    alt: 'WhatsApp Web fully blurred the moment the window loses focus, ready for screen-sharing.',
  },
  lock: {
    eyebrow: 'Privacy · Lock screen',
    headline: 'Lock the whole tab behind a PIN.',
    body: 'A 4-digit PIN covers WhatsApp Web completely. Lock instantly with Ctrl+Shift+L (⌘⇧L on Mac), or let it auto-lock after a chosen idle time. The PIN is stored only as a salted hash — it can be checked, never read back. It is protection from the person walking past your desk, not from someone with full access to your computer.',
    icon: Lock,
    image: '/screens/lock.png',
    aspect: '1366 / 608',
    alt: 'A 4-digit PIN lock screen covering WhatsApp Web.',
  },
} as const;

/** Left column of the dark privacy band — all scoped to the EXTENSION. */
export const PRIVACY_BAND_ITEMS: ReadonlyArray<{ label: string; icon: LucideIcon }> = [
  { label: 'Runs entirely in your browser', icon: MonitorSmartphone },
  { label: 'No servers, no accounts, no sign-up', icon: Server },
  { label: 'No analytics, ads or trackers inside the extension', icon: ShieldCheck },
  { label: 'No remote code — everything ships in the package', icon: Code2 },
];

export const PRIVACY_BAND = {
  headline: "We can't see any of this. By design.",
  websiteNote:
    'This website uses Google Analytics to count visits. The extension sends nothing on its own — the only exception is the opt-in Message Translator, which sends a message’s text to a translation service when you tap Translate.',
  closing:
    'It cannot read your browsing history, your other tabs, your files, your camera or your microphone.',
  icons: { key: KeyRound },
};

/** The permission table, rendered verbatim in the privacy band and on /privacy. */
export const PERMISSIONS: ReadonlyArray<{ perm: string; use: string }> = [
  { perm: 'storage', use: 'Your settings, templates, tasks and PIN hash — on your device' },
  { perm: 'scripting', use: 'Re-apply features after you reload WhatsApp Web' },
  { perm: 'downloads', use: 'Save a status or a CSV — only when you click' },
  { perm: 'alarms + notifications', use: 'Desktop reminders for tasks you create' },
  { perm: 'web.whatsapp.com', use: 'The website it runs on' },
  { perm: 'translation service', use: 'Only if you use Message Translator — sends a message’s text to Lingva/LibreTranslate when you tap Translate' },
];

export const HOW_IT_WORKS: ReadonlyArray<{ step: number; title: string; body: string }> = [
  { step: 1, title: 'Install from the Chrome Web Store', body: 'One click adds it to Chrome, Edge or Brave.' },
  { step: 2, title: 'Open WhatsApp Web', body: 'Head to web.whatsapp.com and sign in as usual.' },
  { step: 3, title: 'Switch on what you want', body: 'Click the toolbar icon and flip on only the tools you need.' },
];

export const FINAL_CTA = {
  headline: 'Take your privacy back on WhatsApp Web.',
  cta: 'Add to Chrome — Free',
  sub: 'Free · No account · Works in Chrome, Edge & Brave.',
};
