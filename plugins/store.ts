import Vuex from 'vuex';
import store from '../store';

export default function(context) {
  context.app.store = store;
}
