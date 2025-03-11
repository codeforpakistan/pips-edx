// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2025-03-10",
  colorMode: {
    preference: 'light'
  },
  app: {
    baseURL: '/pips-edx/'
  }
})