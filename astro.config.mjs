import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// React is only for interactive islands; pages stay static HTML.
// Tailwind v4 runs through Vite and is only imported by the new Site layout,
// so pages still on the old Base layout are untouched while the redesign rolls out.
export default defineConfig({
  site: 'https://the1337llc.com',
  integrations: [react()],
  // How it works now lives on the pricing page.
  redirects: { '/process': '/pricing/' },
  vite: { plugins: [tailwindcss()] },
});
