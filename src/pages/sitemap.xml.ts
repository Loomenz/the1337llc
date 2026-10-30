import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { services } from '../data/services';
import { trades } from '../data/trades';

// Lists every public page so Google finds new service, trade and blog pages.
export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const paths = [
    '/', '/free-audit/', '/services/', '/systems/',
    ...services.map((s) => `/services/${s.slug}/`),
    ...trades.map((t) => `/websites-for/${t.slug}/`),
    ...(posts.length ? ['/blog/', ...posts.map((p) => `/blog/${p.id}/`)] : []),
  ];
  const urls = paths.map((p) => `<url><loc>${new URL(p, site)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
