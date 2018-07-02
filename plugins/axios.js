import Vue from 'vue';
export default function (context) {
  const {
    $axios,
    store,
  } = context;
  Vue.$log.debug(context);
  $axios.onRequest((config) => {
    return config;
  });
}
