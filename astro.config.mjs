// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://astro-app-romu.netlify.app',
  integrations: [react(), solidJs()],
  adapter: netlify()
});