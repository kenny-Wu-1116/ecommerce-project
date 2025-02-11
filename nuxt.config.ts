// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/ecommerce-project/' : '/',
    buildAssetsDir: '/static/',
    head: {
      title: "nuxt3",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        }
      ],
    }
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  

})