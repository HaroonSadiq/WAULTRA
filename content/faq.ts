/** FAQ entries. `id` is a stable slug used for the faq_open analytics event and
 *  the anchor; it must never be derived from the (translatable) question text. */
export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export const FAQ: ReadonlyArray<FaqItem> = [
  {
    id: 'is-it-safe',
    q: 'Is this safe to use? Does it touch my account?',
    a: 'It runs locally in your browser on web.whatsapp.com and adds an on-page layer over the interface you already use. It has no server of its own and never sends your messages, contacts or media anywhere. It signs in to nothing and stores nothing off your device.',
  },
  {
    id: 'phone-app',
    q: 'Does it work on the WhatsApp phone app?',
    a: 'No. It is a browser extension for WhatsApp Web (web.whatsapp.com) in a desktop browser. It does not touch the mobile app.',
  },
  {
    id: 'see-my-messages',
    q: 'Do you see my messages?',
    a: 'No. Nothing leaves your device, and there is no server for it to be sent to. Everything the extension does happens on your own computer.',
  },
  {
    id: 'need-account',
    q: 'Do I need an account?',
    a: 'No. There is no sign-up and no login. Install it and it works.',
  },
  {
    id: 'uninstall',
    q: 'What happens to my settings if I uninstall?',
    a: "Chrome deletes the extension's local storage when you remove it — your settings, templates, tasks and PIN hash go with it. Nothing is kept anywhere else, because nothing was ever stored anywhere else.",
  },
  {
    id: 'is-it-free',
    q: 'Is it free?',
    a: 'Yes — the whole thing is free. There are no paid tiers, no trial countdown and no checkout.',
  },
  {
    id: 'forgot-pin',
    q: 'I forgot my PIN.',
    a: 'The PIN is stored only as a salted hash, so it cannot be looked up or recovered. Removing and reinstalling the extension clears its local storage — including the PIN hash — which lets you set a fresh PIN. You will also reset your other settings by doing this.',
  },
  {
    id: 'edge-brave',
    q: 'Does it work in Edge and Brave?',
    a: 'Yes. Edge and Brave are built on the same engine as Chrome, so it works in all three at version 111 or newer.',
  },
  {
    id: 'downloads-permission',
    q: 'Why does it need the downloads permission?',
    a: 'Only to save a file when you explicitly ask — a status as an .mp4/.jpg, or your chat list as a CSV. No download ever starts on its own or in the background.',
  },
];
