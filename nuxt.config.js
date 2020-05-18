import dotenv from 'dotenv'
import { routes } from './nuxt.config.generate'
// Load environment variables declared in .env into env.process
dotenv.config()

export default {
  mode: 'universal',
  server: {
    port: process.env.NUXT_PORT || 3000,
    host: process.env.NUXT_HOST || 'localhost'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/screen.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // Doc: https://prismic-nuxt.js.org/docs/getting-started
    '@nuxtjs/prismic'
  ],
  /**
   * I18n module configuration
   * See https://nuxt-community.github.io/nuxt-i18n/options-reference.html
   */
  i18n: {
    locales: [
      {
        name: 'Italiano',
        code: 'it',
        iso: 'it-IT',
        file: 'it.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-GB',
        file: 'en.js'
      }
    ],
    lazy: true,
    langDir: 'langs/',
    defaultLocale: 'it'
  },
  /**
   * Prismic module configuration
   */
  prismic: {
    endpoint: process.env.PRISMIC_URL,
    linkResolver: '~/prismic/link-resolver.js'
  },
  /*
   ** Static site generation configuration
   */
  generate: {
    routes
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
