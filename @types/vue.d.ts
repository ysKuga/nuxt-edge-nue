// import { Middleware } from '@nuxt/vue-app';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
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
  interface Vue {
    $axios: NuxtAxiosInstance;
    $log: VueLogger;
    $jq: JQueryStatic;
  }
}
