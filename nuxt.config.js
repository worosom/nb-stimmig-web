const pkg = require('./package')
const webpack = require("webpack");


module.exports = {
  mode: 'universal',
  router: {
    base: '/nb-stimmig-web/'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,700' },
    ],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js' }
		]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazyload.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: true }],
    ['nuxt-i18n', {
      locales: [
        {
          code: 'de',
          file: 'de-DE.js',
          iso: 'de-DE'
        }
      ],
      defaultLocale: 'de',
      langDir: 'locales/',
      lazy: true
    }]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
    })],
    extend(config, ctx) {
      //   // Run ESLint on save
      //   if (ctx.isDev && ctx.isClient) {
      //     config.module.rules.push({
      //       enforce: 'pre',
      //       test: /\.(js|vue)$/,
      //       loader: 'eslint-loader',
      //       exclude: /(node_modules)/
      //     })
      //   }
      // now i configure the responsive-loader
      config.module.rules.find(
        rule => rule.use ? rule.use[0].loader === 'url-loader' : rule.loader === 'url-loader'
      ).exclude = /\.(jpe?g|png)$/;
      config.module.rules.push({
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              min: 300,
              max: 2048,
              steps: 7,
              silent: false,
              placeholder: true,
              placeholderSize: 16,
              quality: 70,
              adapter: require("responsive-loader/sharp")
            }
          }
        ]
      })
    }
  }
}
