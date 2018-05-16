module.exports = {
  modules: [
    ['@nuxtjs/axios'],
    ['@nuxtjs/toast'],
    ['@nuxtjs/proxy',
      // { pathRewrite: { '^/api' : '/api/v1' } }
    ],
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-edge-nue',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
  },
  proxy: {
    // With options
    '/api': {
      target: 'http://localhost:3000/data',
      // WebSocket: false
      ws: false,
      // from 'localhost:3000'
      changeOrigin: true,
      pathRewrite: {
        // /api/～ -> http://localhost:3000/data/
        '^/api/': ''
      },
    }
  }
}
