// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // '@nuxt/ui',
    // '@pinia/nuxt',
    '@nhost/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      nhost: {
        subdomain: process.env.NHOST_SUBDOMAIN || 'local',
        region: process.env.NHOST_REGION || 'eu-central-1'
      }
    }
  },
  app: {
    head: {
      title: 'Gestion Transport Scolaire & Cantine',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Application de gestion du transport scolaire et de la cantine avec système de QR-Code' 
        }
      ]
    }
  },
  devtools: { enabled: true }
})