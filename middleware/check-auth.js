// eslint-disable-next-line no-unused-vars
import { Middleware } from '@nuxt/vue-app';

/** @type Middleware  */
const middleware = function(context) {
  const { store } = context;
  console.log('middleware/check-auth');
  // ユーザーが認証されていないとき
  if (!store.getters['Auth/checkAuth']) {
    console.log('NOTTO OUSUDO');
    // return redirect('/login')
  } else {
    console.log('OUSUDO');
  }
};

export default middleware;
