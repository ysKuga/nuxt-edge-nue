import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module '@nuxt/vue-app' {
  interface Context {
    $axios: NuxtAxiosInstance;
  }
}
