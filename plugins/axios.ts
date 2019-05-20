// import Vue from 'vue';
import { Middleware } from '@nuxt/vue-app';
import { AxiosRequestConfig } from 'axios';

const middleware: Middleware = function(context): void {
  const {
    $axios,
    // store,
  } = context;
  $axios.onRequest(
    (config): AxiosRequestConfig => {
      return config;
    }
  );
};

export default middleware;
