import { GetterTree, Getter } from 'vuex';

const checkAuth: Getter<Store.Auth.State, Store.Root.State> = (
  state
): boolean => {
  return state['is-authed'];
};

const getters: GetterTree<Store.Auth.State, Store.Root.State> = {
  checkAuth,
};

export default getters;
