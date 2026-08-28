import clsx from 'clsx';
import { PERMISSIONS } from '@/content/copy';

/** The permission table — showing it is more persuasive than claiming it. Used
 *  in the dark privacy band ("band") and on /privacy ("light"). Scrolls inside
 *  its own container on narrow screens. */
export function PermissionTable({ variant = 'light' }: { variant?: 'light' | 'band' }) {
  const band = variant === 'band';
  const bc = band ? 'border-band-line' : 'border-line';
  return (
    <div className={clsx('overflow-x-auto rounded-card border', bc)}>
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <thead>
          <tr className={band ? 'text-band-muted' : 'text-muted'}>
            <th className={clsx('border-b px-4 py-3 font-semibold', bc)}>Permission</th>
            <th className={clsx('border-b px-4 py-3 font-semibold', bc)}>What it&apos;s for</th>
          </tr>
        </thead>
        <tbody>
          {PERMISSIONS.map((p) => (
            <tr key={p.perm}>
              <td
                className={clsx(
                  'whitespace-nowrap border-b px-4 py-3 font-mono text-[13px] font-medium',
                  bc,
                  band ? 'text-band-text' : 'text-ink',
                )}
              >
                {p.perm}
              </td>
              <td className={clsx('border-b px-4 py-3', bc, band ? 'text-band-muted' : 'text-muted')}>
                {p.use}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
