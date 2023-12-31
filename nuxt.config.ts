// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',      
      viewport: 'width=device-width, initial-scale=1',      
      title: 'AliExpress clone | Ecommerce w/ Nuxt 3 Vue js Tailwind CSS Supabase Prisma Netlify',  
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true }
      ]    
    }
  },
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    public: {
      stripPk: process.env.STRIPE_PK_KEY || process.env.PK_KEY,
    }
  }    
})
