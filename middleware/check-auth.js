import Vue from 'vue';

export default function(context) {
  const { store } = context;
  Vue.$log.debug('middleware/check-auth');
  // ユーザーが認証されていないとき
  if (!store.getters['Auth/checkAuth']) {
    Vue.$log.debug('NOTTO OUSUDO');
    // return redirect('/login')
  } else {
    Vue.$log.debug('OUSUDO');
  }
}
