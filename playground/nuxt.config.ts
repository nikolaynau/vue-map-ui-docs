export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/playground/'
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
