// Vue.js へのプラグイン連携事例を参考に
// - [Vue.js-Plugins with TypeScript - Peter's](https://www.mistergoodcat.com/post/vuejs-plugins-with-typescript)
import Vue from 'vue';
import jQuery from 'jquery';

export function jQueryPlugin(v: typeof Vue): void {
  v.prototype.$jq = jQuery;
}

Vue.use(jQueryPlugin);
