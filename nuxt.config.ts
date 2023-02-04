// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  typescript: { strict: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Nuxt App',
      meta: [{ name: 'description', content: 'Nuxt App Starter' }],
      htmlAttrs: { lang: 'en' },
    },
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
  runtimeConfig: {},
});
