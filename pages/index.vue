<template lang="pug">
  section.container
    div
      app-logo
      h1.title nuxt-edge-nue
      h2.subtitle Nuxt.js project
      .links
        a(
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        ) Documentation
        a(
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        ) GitHub
</template>

<script lang="ts">
import Vue from 'vue';
import AppLogo from '~/components/AppLogo.vue';
export default Vue.extend({
  middleware: ['check-auth'],
  components: {
    AppLogo,
  },
  mounted() {
    this.$axios.get('/api/user/').then(response => {
      console.log(response);
    });
  },
});
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
