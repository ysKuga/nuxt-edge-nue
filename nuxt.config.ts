import webpack from 'webpack';
import { Configuration } from 'webpack';
import NuxtConfiguration, { Module } from '@nuxt/config';
import {} from '@nuxtjs/axios';

// @nuxt/vue-app の Context が build のものとうまくいかなかったので
// import { Context } from '@nuxt/vue-app';
interface Context {
  isDev: boolean;
  isClient: boolean;
  isServer: boolean;
  loaders: unknown;
}

const modules: Module[] = [
  '@nuxtjs/axios',
  '@nuxtjs/toast',
  [
    '@nuxtjs/proxy',
    {},
    // { pathRewrite: { '^/api' : '/api/v1' } }
  ],
];

const config: NuxtConfiguration = {
  modules,
  plugins: [
    {
      src: '~plugins/jquery',
      ssr: false,
    },
    {
      src: '~plugins/vuejs-logger',
      ssr: false,
    },
    {
      src: '~plugins/axios',
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
    extend(config: Configuration, ctx: Context): void {
      // module.export でなくしたので process へのアクセスができなくなった？
      const { isServer, isClient } = ctx;
      if (isServer && isClient) {
        config.module &&
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
      if (config.module) {
        config.module.rules.push(
          Object.assign(
            {
              test: /((client|server)\.js)|(\.tsx?)$/,
            },
            tsLoader
          )
        );
        config.module.rules.map(
          (rule): webpack.RuleSetRule => {
            if (rule.loader === 'vue-loader' && rule.options) {
              // rule.options.loaders だと下記エラーが出てしまったので文字列での指定にしてみる
              // - プロパティ 'loaders' は型 'string' に存在しません。
              rule.options['loaders'] = {
                ts: tsLoader,
              };
            }
            return rule;
          }
        );
      }
      config.resolve &&
        config.resolve.extensions &&
        config.resolve.extensions.push('.ts');
      if (isServer) {
        config.externals = [];
      }
    },
  },
  proxy: {
    '/api/user': {
      target: 'http://localhost:3000/stubs',
      pathRewrite: {
        // /api/～ -> http://localhost:3000/data/
        '^/api/user/': 'user.json',
      },
    },
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

export default config;
