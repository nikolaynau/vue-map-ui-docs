export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/vue-map-ui-docs/playground/'
  },
  experimental: {
    payloadExtraction: false
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-vue-map-ui'],
  vueMap: {
    normalizeStyle: false
  },
  css: ['~/assets/css/main.css']
});
