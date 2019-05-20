// import { Middleware } from '@nuxt/vue-app';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

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

type Messages = unknown[];

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance;
    $log: {
      debug(...messages: Messages): void;
      info(...messages: Messages): void;
      warn(...messages: Messages): void;
      error(...messages: Messages): void;
      fatal(...messages: Messages): void;
    };
  }
}
