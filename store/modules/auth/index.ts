import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { Root, Auth as Local } from 'store/types';

const namespaced: boolean = true;

const Auth: Module<Local.State, Root.State> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default Auth;
