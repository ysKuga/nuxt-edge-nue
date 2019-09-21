// eslint-disable-next-line
import { Mutation } from 'vuex';
// eslint-disable-next-line
import { State as Local } from './state';

/**
 * @type { Mutation<Local> }
 */
const setNamae = (state, payload) => {
  state.namae = payload.namae;
};

export default {
  setNamae,
};
