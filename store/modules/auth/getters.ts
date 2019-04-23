import { GetterTree, Getter } from 'vuex';
// import { Root, Auth as Local } from 'store/types';

const checkAuth: Getter<Store.Auth.State, Store.Root.State> = (
  state,
): boolean => {
  return state['is-authed'];
};

export const getters: GetterTree<Store.Auth.State, Store.Root.State> = {
  checkAuth,
};
