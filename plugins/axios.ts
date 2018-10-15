import Vue from 'vue';
export default function(context) {
  const {
    $axios,
    // store,
  } = context;
  $axios.onRequest(config => {
    return config;
  });
}
