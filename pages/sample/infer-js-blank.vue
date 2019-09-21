<template>
  <div>
    infer js blank {{ $store.getters['profile/getNamae'] }} {{ currentUser }}
  </div>
</template>

<script>
import { profileComputed, profileMethods } from '@/store/profile/helper';

export default {
  computed: {
    ...profileComputed,
  },
  mounted() {
    this;
  },
  methods: {
    ...profileMethods,
  },
};
</script>
