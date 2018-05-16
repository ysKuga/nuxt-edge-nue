export default function ({
  $axios,
  store
}) {
  $axios.onRequest((config) => {
    return config;
  });
}
