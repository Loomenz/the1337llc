import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// React is only for interactive islands (Lab demos, 3D); pages stay static HTML.
export default defineConfig({
  site: 'https://the1337llc.com',
  integrations: [react()],
});
