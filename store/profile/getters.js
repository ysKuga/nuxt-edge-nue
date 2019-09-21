// eslint-disable-next-line
import { Getter } from 'vuex';
// eslint-disable-next-line
import { State as Root } from '../state';
// eslint-disable-next-line
import { State as Local } from './state';

/**
 * @type { Getter<Local, Root> }
 */
const getNamae = state => state.namae;

export default {
  getNamae,
};
