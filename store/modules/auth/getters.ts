import { GetterTree, Getter } from 'vuex';
import { Root, Auth as Local } from 'store/types';

const checkAuth: Getter<Local.State, Root.State> = (state): boolean => {
  return state['is-authed'];
};

export const getters: GetterTree<Local.State, Root.State> = {
  checkAuth,
};
