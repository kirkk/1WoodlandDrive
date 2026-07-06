import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://1woodlanddrive.com',
  integrations: [sitemap()],
});
