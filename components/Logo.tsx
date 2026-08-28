import Image from 'next/image';

/** The WA WEB ULTRA brand mark — the extension's own icon (public/logo.png,
 *  sourced from the icons/ folder), so the site and the extension share one
 *  identity. Decorative: the adjacent "WA WEB ULTRA" wordmark carries the name. */
export function Logo({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
