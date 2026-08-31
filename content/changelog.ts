/** Public version history, newest first. Keep marketing-appropriate — this is
 *  not the internal build log. */
export interface ChangelogEntry {
  version: string;
  date: string; // ISO
  summary: string;
  changes: string[];
}

export const CHANGELOG: ReadonlyArray<ChangelogEntry> = [
  {
    version: '1.0.13',
    date: '2026-08-31',
    summary: 'Reliability polish across the lock screen, Quick Chat and first-run.',
    changes: [
      'Lock screen now accepts your PIN reliably even when WhatsApp Web tries to grab focus — no more reloading to unlock.',
      'Quick Chat retries automatically the moment a number is still loading, and shows a clear, friendly message when a number isn’t on WhatsApp.',
      'Fresh installs apply straight away: open tabs get a one-tap “reload to activate” prompt instead of needing a restart.',
      'A more compact dashboard that fits more on screen.',
    ],
  },
  {
    version: '1.0.12',
    date: '2026-08-28',
    summary: 'Initial public release.',
    changes: [
      'Granular blur for the chat list, conversations and group panels, with reveal-on-hover, adjustable intensity and auto-blur on idle.',
      'Presentation Mode — auto-blur the moment the window loses focus, for safe screen-sharing.',
      'PIN lock screen with a salted-hash PIN, instant lock, and an adjustable auto-lock idle time (1–5 minutes).',
      'Keyboard shortcuts: Alt+X blurs everything, Ctrl+Shift+L (⌘⇧L on Mac) locks the tab — right on WhatsApp Web.',
      'Productivity tools: Quick Chat, Status Download, Export Contacts, Message Templates, Smart Replies, Assisted Send, Tasks & Reminders, Business Toolbar, Quick Contact Saver and Tools & Utilities.',
      'Personalization: nine accent colors and six chat backgrounds.',
      'Runs 100% on-device — no servers, no accounts, no analytics or trackers in the extension.',
    ],
  },
];
