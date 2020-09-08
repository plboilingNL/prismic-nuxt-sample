import path from 'path'
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },
  bodyAttrs: {
    class: 'antialiased'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0d6faa' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.css', '@/assets/scss/vendors/vue-slick-carousel.css', '@/assets/scss/vendors/vue-slick-carousel-theme.css'],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [{ src: '~/plugins/vue-carousel.js', ssr: false }, '~/plugins/i18n.js', '~/plugins/vue-lazysizes.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: process.env.PRISMIC_URL,
    linkResolver: '~/prismic/link-resolver.js'
  },
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
    'nuxt-purgecss',
    'nuxt-responsive-loader'
  ],
  responsiveLoader: {
    name: 'images/[hash:7]-[width].[ext]',
    sizes: [320, 768, 1024, 1280],
    placeholder: true, // use [name] to keep the original filename // 85 is default. Tweak this if you need to
    adapter: require('responsive-loader/sharp')
  },
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
    whitelistPatterns: [/$carousel/]
  },
  /**
   * I18n module configuration
   * See https://nuxt-community.github.io/nuxt-i18n/options-reference.html
   */
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-GB',
        fileile: 'en.json'
      },
      {
        name: 'Polski',
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl.json'
      },
      {
        name: 'Nederlands',
        code: 'nl',
        iso: 'nl-NL',
        file: 'nl.json'
      }
    ],
    defaultLocale: 'pl',
    strategy: 'prefix_except_default',
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    lazy: false,
    seo: true,
    parsePages: false,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true
    },
    routes: {
      routes
    },
    vueI18n: {
      fallbackLocale: 'pl',
      messages: {
        en: {
          team: 'TeamEN',
          about: 'About',
          contact: 'Contact'
        },
        pl: {
          team: 'TeamPL',
          about: 'O nas',
          contact: 'Kontakt'
        },
        nl: {
          team: 'TeamNL',
          about: 'Over ons',
          contact: 'Contact'
        }
      }
    }
  },
  /**

  /*
  //  ** Static site generation configuration
   */
  /*
   ** Build configuration
   */
  // Smooth scroll
  // router: {
  //   scrollBehavior: async (to, from, savedPosition) => {
  //     if (savedPosition) {
  //       return savedPosition
  //     }

  //     const findEl = async (hash, x) => {
  //       return (
  //         document.querySelector(hash) ||
  //         new Promise((resolve, reject) => {
  //           if (x > 50) {
  //             return resolve()
  //           }
  //           setTimeout(() => {
  //             resolve(findEl(hash, ++x || 1))
  //           }, 100)
  //         })
  //       )
  //     }

  //     if (to.hash) {
  //       const el = await findEl(to.hash)
  //       if ('scrollBehavior' in document.documentElement.style) {
  //         return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  //       } else {
  //         return window.scrollTo(0, el.offsetTop)
  //       }
  //     }

  //     return { x: 0, y: 0 }
  //   }
  // },
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
    // extend(config, { isDev, isClient }) {
    //   config.module.rules.unshift({
    //     test: /\.(png|jpe?g|gif)$/,
    //     use: {
    //       loader: 'responsive-loader',
    //       options: {
    //         placeholder: true,
    //         quality: 95,
    //         placeholderSize: 30,
    //         name: 'images/[name].[hash:hex:7].[width].[ext]',
    //         adapter: require('responsive-loader/sharp')
    //       }
    //     }
    //   })
    //   config.module.rules.forEach((value) => {
    //     if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {

    //       value.test = /\.(svg|webp)$/
    //     }
    //   })
    // },
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          tailwindConfig: {
            test: /tailwind\.config/,
            chunks: 'all',
            priority: 10,
            name: true
          }
        }
      }
    }
  }
}
