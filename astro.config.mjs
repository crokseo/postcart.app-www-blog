// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.postcart.app',
  output: 'static',
  integrations: [sitemap({
    customPages: ['https://www.postcart.app/'],
  })],
});
