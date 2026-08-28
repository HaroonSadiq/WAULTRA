import type { MetadataRoute } from 'next';
import { SITE_URL, LEGAL_UPDATED } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LEGAL_UPDATED);
  const routes: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1 },
    { path: '/support', priority: 0.8 },
    { path: '/changelog', priority: 0.6 },
    { path: '/privacy', priority: 0.7 },
    { path: '/terms', priority: 0.4 },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: r.priority,
  }));
}
