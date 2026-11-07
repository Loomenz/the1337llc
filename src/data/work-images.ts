// Portfolio screenshots as Astro image assets, so pages can serve AVIF/WebP at the right size.
// Keyed by the public path used in work.ts / trades.ts ('/work/spk-lawn.jpg').
import type { ImageMetadata } from 'astro';
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/work/*.jpg', { eager: true });
export const WORK_IMAGES: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([p, m]) => [`/work/${p.split('/').pop()}`, m.default]),
);
