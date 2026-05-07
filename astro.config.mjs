import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ojunai.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
