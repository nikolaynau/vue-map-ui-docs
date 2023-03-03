export default defineNuxtConfig({
  ssr: false,
  experimental: {
    payloadExtraction: false
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-vue-map-ui'],
  vueMap: {
    normalizeStyle: false
  }
});
