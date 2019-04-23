import Vue from 'vue';
import { Middleware } from '@nuxt/vue-app';

const middleware: Middleware = function(context) {
  const {
    $axios,
    // store,
  } = context;
  $axios.onRequest(config => {
    return config;
  });
};

export default middleware;
