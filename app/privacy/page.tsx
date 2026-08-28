import type { Metadata } from 'next';
import { DocLayout } from '@/components/DocLayout';
import { pageMeta } from '@/lib/seo';
import { LEGAL_UPDATED, SITE_NAME, SUPPORT_EMAIL } from '@/content/site';
import { PERMISSIONS } from '@/content/copy';

export const dynamic = 'force-static';
export const metadata: Metadata = pageMeta({
  title: 'Privacy Policy',
  description:
    'How WA WEB ULTRA handles your data: it runs entirely on your device and transmits nothing. This page also discloses the website’s own analytics.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <DocLayout title="Privacy Policy" updated={LEGAL_UPDATED}>
      {/* One-sentence summary (TL;DR) */}
      <div className="not-prose rounded-card border border-line bg-bg-2 p-5">
        <p className="!mt-0 text-ink">
          <strong className="text-brand">In one sentence:</strong> {SITE_NAME} runs entirely inside
          your own browser. It has <strong>no servers</strong>, and it{' '}
          <strong>never transmits, sells, or shares</strong> your messages, contacts, phone numbers,
          or any other data. Everything it stores stays on your device.
        </p>
      </div>

      <p>
        {SITE_NAME} (&ldquo;the extension&rdquo;, &ldquo;we&rdquo;) is a browser extension that adds
        privacy, productivity, and personalization features on top of WhatsApp Web
        (<code>web.whatsapp.com</code>). This policy explains exactly what the extension accesses, what
        it stores, and — just as importantly — what it never does.
      </p>

      {/* Mandatory: this page loads Google Analytics, so it must disclose that. */}
      <h2 id="website">About this website (not the extension)</h2>
      <p>
        This website — the pages you are reading now — uses Google Analytics to count visits, see
        which pages people find useful, and see roughly which countries visitors come from. It is
        aggregate statistics only: we do not identify individual visitors, build profiles, or run
        advertising. It sets analytics cookies only if you accept them, and you can decline.
      </p>
      <p>
        The extension is a separate thing and contains none of that. {SITE_NAME} has no analytics, no
        telemetry, no trackers, and no network calls to us of any kind. Nothing you do inside
        WhatsApp Web is measured, logged, or transmitted. The rest of this policy describes the
        extension.
      </p>

      <h2>1. We do not collect or transmit your data</h2>
      <p>
        The extension does not operate any server, backend, or account system. It contains no
        analytics, no advertising, no trackers, and no third-party SDKs. The extension operates no
        server and sends nothing to us. The only network access it performs is fetching the status
        media file you clicked to download, directly from WhatsApp&apos;s own servers. Everything else
        happens locally in your browser, and your information never leaves your computer.
      </p>

      <h2>2. Information the extension accesses (on your device only)</h2>
      <p>
        To provide its features, the extension reads parts of the WhatsApp Web page you already have
        open, in your browser, in real time. This processing happens locally and is not recorded or
        sent anywhere.
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Why it is accessed</th>
            <th>Where it goes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chat content (message text &amp; media on screen)</td>
            <td>
              To blur sensitive content, and to insert a template or a suggested reply into the
              compose box when you use those tools
            </td>
            <td>Processed in the page, in memory; never recorded or sent</td>
          </tr>
          <tr>
            <td>Contact names &amp; phone numbers</td>
            <td>
              Only when <em>you</em> use Quick Chat or Quick Contact Saver, or click Export Contacts
              (to build a CSV)
            </td>
            <td>A CSV is saved to your own Downloads only when you export; never uploaded</td>
          </tr>
          <tr>
            <td>Status media (photos/videos)</td>
            <td>
              Only when <em>you</em> click to download a status
            </td>
            <td>Downloaded from WhatsApp&apos;s servers to your own Downloads</td>
          </tr>
          <tr>
            <td>Your settings, templates, tasks, saved contacts, reply rules &amp; PIN</td>
            <td>To remember your configuration between sessions</td>
            <td>
              Stored locally in <code>chrome.storage.local</code> on your device
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The extension does not access your browsing history, other websites, your Google account, your
        files, your camera, or your microphone.
      </p>

      <h2>3. Where your data is stored</h2>
      <ul>
        <li>
          <strong>On your device only.</strong> Persistent settings (templates, tasks, saved
          contacts, reply rules, theme, and your PIN) are kept in <code>chrome.storage.local</code>,
          the browser&apos;s local extension storage on your computer.
        </li>
        <li>
          <strong>In memory only.</strong> Anything the extension reads from the page to render a
          feature lives only for the moment it is needed and is then discarded — it is never written
          to disk or sent anywhere.
        </li>
        <li>
          <strong>Your PIN is stored only as a salted cryptographic hash</strong> (SHA-256). The
          extension can check a PIN you type but cannot read or recover the original.
        </li>
      </ul>

      <h2>4. What we never do</h2>
      <ul>
        <li>We never send your messages, contacts, phone numbers, or media to us or to any third party.</li>
        <li>We never sell, rent, or share your data.</li>
        <li>We run no analytics, telemetry, advertising, or fingerprinting in the extension.</li>
        <li>We load no remote code — all logic ships inside the extension package.</li>
      </ul>

      <h2>5. Permissions and why they are needed</h2>
      <table>
        <thead>
          <tr>
            <th>Permission</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {PERMISSIONS.map((p) => (
            <tr key={p.perm}>
              <td>
                <code>{p.perm}</code>
              </td>
              <td>{p.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>6. Data retention &amp; how to delete your data</h2>
      <ul>
        <li>
          In-memory data is discarded automatically when you close or reload the WhatsApp Web tab.
        </li>
        <li>
          Locally-stored settings remain until you remove them. You can clear them using the controls
          in the extension (for example &ldquo;Remove PIN&rdquo; or &ldquo;Clear&rdquo;), or by
          removing the extension from <code>chrome://extensions</code>, which deletes its local
          storage entirely.
        </li>
      </ul>

      <h2>7. Children</h2>
      <p>
        The extension is a general-purpose utility and is not directed to children under 13. It does
        not knowingly collect information from anyone — it collects nothing.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        If this policy changes, the &ldquo;Last updated&rdquo; date above will change and the revised
        policy will be posted at this URL. Material changes will be reflected before they take effect.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about this policy or your privacy? Email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </DocLayout>
  );
}
