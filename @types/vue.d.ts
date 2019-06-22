import _VueRouter, { RouterOptions } from 'vue-router';
// import { Middleware } from '@nuxt/vue-app';
import { VueLogger } from './vue-logger';

// declare module の指定の事例
// node_modules/@nuxt/vue-app/types/vue.d.ts

// declare module "vue/types/options" {
//   interface ComponentOptions<V extends Vue> {
//     middleware?: Middleware | Middleware[];
//   }
// }

// declare module "vue/types/vue" {
//   interface Vue {
//     $nuxt: NuxtApp;
//   }
// }

declare module 'vue/types/vue' {
  interface VueRouter extends _VueRouter {
    options?: RouterOptions;
  }
  interface Vue {
    $router: VueRouter;
    $log: VueLogger;
    $jq: JQueryStatic;
  }
}
