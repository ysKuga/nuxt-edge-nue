export default function(context) {
  const { store } = context;
  console.log('middleware/check-auth');
  // ユーザーが認証されていないとき
  if (!store.getters['Auth/checkAuth']) {
    console.log('NOTTO OUSUDO');
    // return redirect('/login')
  } else {
    console.log('OUSUDO');
  }
}
