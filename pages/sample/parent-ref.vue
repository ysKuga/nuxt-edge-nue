<template>
  <div>
    parent
    <child ref="child" />
  </div>
</template>

<script>
import Vue from 'vue';

import Child from './child.vue';

/**
 * @typedef {Object<string, Vue>} Refs
 * @property {InstanceType<typeof Child>} child
 */

/**
 * @typedef {Object<string, any>} Data
 */

// eslint-disable-next-line
/** @typedef {import("vue/types/options").ThisTypedComponentOptionsWithRecordProps<Vue & { $refs: Refs }, Data, {}, {}, {}>} Options */
/** @type {Options} */
export const options = {
  components: {
    Child,
  },
  mounted() {
    console.log(this.$refs.child.checkName());
  },
};

export default Vue.extend(options);
</script>
