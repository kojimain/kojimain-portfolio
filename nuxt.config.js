const pkg = require('./package')
const path = require('path')

/*
** gh-pagesならrouterBase変更
*/
const routerBase =
  process.env.DEPLOY_ENV === 'gh-pages' ? '/kojimain-portfolio/' : '/'

module.exports = {
  mode: 'spa',

  /*
  ** router
  */
  router: {
    mode: 'hash',
    base: process.env.DEPLOY_ENV === 'gh-pages' ? '/kojimain-portfolio/' : '/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'kojimain-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: path.join(routerBase, '/favicon.ico')
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
        integrity:
          'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/app.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** modules
  */
  modules: ['@nuxtjs/dotenv', '@nuxtjs/apollo'],

  /*
  ** apollo
  */
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  }
}
