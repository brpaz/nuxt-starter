import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.NUXT_BASE_URL || 'http://localhost:3000',
  },
});
