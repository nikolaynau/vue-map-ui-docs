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
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      ocmApiKey: 'af7fd7de0ed048059413e19e7fb7d90b',
      mapboxAccessToken:
        'pk.eyJ1IjoiYWx0YXJpY2thIiwiYSI6ImNpa3BidXNoaTExMWh1Mm02YTY1ZXlvZXkifQ.fRS4SvpNrcqc7ZFKQSUJxA'
    }
  }
});
