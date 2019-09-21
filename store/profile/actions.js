// eslint-disable-next-line
import { Action } from 'vuex';
// eslint-disable-next-line
import { State as Root } from '../state';
// eslint-disable-next-line
import { State as Local } from './state';
// ミューテーションをインポート
import mutations from './mutations';

/** @type { Action<Local, Root> } */
const setNamae = (context, payload) => {
  // 定義名を利用して commit を実施
  context.commit(mutations.setNamae.name, payload);
};

export default {
  setNamae,
};
