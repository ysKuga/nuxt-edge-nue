import { mapState, mapGetters, mapActions } from 'vuex';
// eslint-disable-next-line
import { State } from './state';
import getters from './getters';
import actions from './actions';

// eslint-disable-next-line
const stateAlias = {
  currentUser: 'namae',
};

/**
 * @type {{[K in keyof stateAlias]: State[stateAlias[K]]} & {[K in keyof getters]: getters[K]}}
 */
export const profileComputed = {
  ...mapState('profile', {
    currentUser: state => state.namae,
  }),
  ...mapGetters('profile', Object.keys(getters)),
};

/**
 * @type {{[K in keyof actions]: actions[K]}}
 */
export const profileMethods = mapActions('profile', Object.keys(actions));
