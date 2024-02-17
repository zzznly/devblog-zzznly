export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-vue3-google-signin'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
});
