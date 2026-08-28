/**
 * The verified, store-safe feature set — the SINGLE SOURCE OF TRUTH for the
 * feature grid and the on-page claims. Nothing here may describe a feature that
 * is not in the audited build. Do not add read-receipt / typing / deleted-msg /
 * presence / bulk-messaging language: those features are not in this build.
 */
import type { LucideIcon } from 'lucide-react';
import {
  MessageSquarePlus,
  Download,
  Users,
  FileText,
  Sparkles,
  Send,
  ListChecks,
  LayoutGrid,
  UserPlus,
  Palette,
  Image as ImageIcon,
  Wrench,
} from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
}

/** The "Everything else" grid on the landing page. */
export const FEATURES: ReadonlyArray<Feature> = [
  {
    id: 'quick-chat',
    title: 'Quick Chat',
    blurb:
      'Message any phone number without saving it first — the conversation opens in place, with no page reload.',
    icon: MessageSquarePlus,
  },
  {
    id: 'status-download',
    title: 'Status Download',
    blurb:
      'Save a status you are viewing as its real file — .mp4 or .jpg — straight to your Downloads folder.',
    icon: Download,
  },
  {
    id: 'export-contacts',
    title: 'Export Contacts',
    blurb: 'Download your chat list as a CSV file, entirely on your own machine.',
    icon: Users,
  },
  {
    id: 'templates',
    title: 'Message Templates',
    blurb:
      'Keep canned messages and drop one into the compose box with a single click.',
    icon: FileText,
  },
  {
    id: 'smart-replies',
    title: 'Smart Replies',
    blurb:
      'When an incoming message matches a keyword, it suggests a reply and inserts it into the compose box. You review and send.',
    icon: Sparkles,
  },
  {
    id: 'assisted-send',
    title: 'Assisted Send',
    blurb:
      'Step through a list of contacts one at a time, with your template pre-filled for each. You press send every time.',
    icon: Send,
  },
  {
    id: 'tasks',
    title: 'Tasks & Reminders',
    blurb:
      'A local to-do list with an optional due date, a linked contact, and a desktop reminder.',
    icon: ListChecks,
  },
  {
    id: 'business-toolbar',
    title: 'Business Toolbar',
    blurb:
      'A floating, draggable toolbar that keeps the productivity tools within reach as you work.',
    icon: LayoutGrid,
  },
  {
    id: 'contact-saver',
    title: 'Quick Contact Saver',
    blurb: 'Save a name and number, then open a chat with them in one click.',
    icon: UserPlus,
  },
  {
    id: 'theme-color',
    title: 'Theme Color',
    blurb: "Recolor WhatsApp Web's accent from nine preset swatches.",
    icon: Palette,
  },
  {
    id: 'backgrounds',
    title: 'Custom Backgrounds',
    blurb:
      'Six preset chat wallpapers — White, Aurora, Dusk, Emerald, Sunset and Noir.',
    icon: ImageIcon,
  },
  {
    id: 'tools',
    title: 'Tools & Utilities',
    blurb:
      'Small local helpers: a character counter, quick-open, and a JSON export.',
    icon: Wrench,
  },
];

/** Granular blur targets, grouped as they appear in the extension popup. */
export const BLUR_TARGETS: ReadonlyArray<{ group: string; items: string[] }> = [
  {
    group: 'Chat list',
    items: ['Profile pictures & group icons', 'Contact names', 'Message previews'],
  },
  {
    group: 'Conversation',
    items: ['Message text', 'Media — photos, video, stickers, GIFs', 'Voice notes & waveforms', 'The input box you are typing in'],
  },
  {
    group: 'Group chats',
    items: ['Group name, description & photo', 'The member list', 'Sender name & photo above each message'],
  },
];
