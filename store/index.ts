import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { Root } from './types';
import modules from './modules';

Vue.use(Vuex);

const store: StoreOptions<Root.State> = {
  state: {
    version: '1.0.0', // a simple property
  },
  modules,
};