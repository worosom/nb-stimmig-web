const pkg = require('./package')
const webpack = require("webpack");
const routes = [
  '/motivation',
  '/technik',
  '/herstellung',
  '/produkte/heim-l'
]

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css',
        media: 'none', onload: 'if(media!=="all")media="all"' }
    ],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js', defer: true }
		]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss'
  ],
  sitemap: {
    generate: true,
    hostname: 'https://stimmig-lautsprechersysteme.de',
    routes
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazyload.js',
    '~/plugins/vue-scrollto.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: true }],
    '@nuxtjs/sitemap'
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
  },
  generate: {
    routes
  }
}
