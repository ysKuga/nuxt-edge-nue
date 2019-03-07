module.exports = {
  modules: [
    ['@nuxtjs/axios'],
    ['@nuxtjs/toast'],
    [
      '@nuxtjs/proxy',
      // { pathRewrite: { '^/api' : '/api/v1' } }
    ],
  ],
  plugins: [
    {
      src: '~plugins/vuejs-logger',
      ssr: false,
    },
    {
      src: '~plugins/axios',
      ssr: false,
    },
    {
      src: '~plugins/store',
      ssr: false,
    },
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-edge-nue',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070',
  },
  /*
   ** Build configuration
   */
  build: {
    /**
     * Run ESLint on save
     *
     * @see https://github.com/renowan/nuxt-edge-typescript-template/blob/master/nuxt.config.js#L39-L52
     */
    extend(config, { isServer }) {
      const { server, browser } = process;
      if (server && browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      const tsLoader = {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
        exclude: [/vendor/, /\.nuxt/],
      };
      config.module.rules.push(
        Object.assign(
          {
            test: /((client|server)\.js)|(\.tsx?)$/,
          },
          tsLoader,
        ),
      );
      config.resolve.extensions.push('.ts');
      config.module.rules.map(rule => {
        if (rule.loader === 'vue-loader') {
          rule.options.loaders = {
            ts: tsLoader,
          };
        }
        return rule;
      });
      if (isServer) {
        config.externals = [];
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
        '^/api/': '',
      },
    },
  },
};
