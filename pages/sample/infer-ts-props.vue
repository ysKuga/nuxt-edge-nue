<template>
  <div>test-ts</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import _ from 'lodash';

interface Data {
  name: string;
}
interface Methods {
  debounce: Function;
}
// eslint(@typescript-eslint/no-empty-interface) に対して
// eslint-disable-next-line
interface Computed {}
interface Props {
  propId: number;
  propAidei: string;
}
type Options = ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
>;
const options: Options = {
  props: {
    propId: {
      type: Number,
      default() {
        return 1;
      },
    },
    propAidei: {
      type: String,
      default: () => {
        return 'ichi';
      },
    },
  },
  data() {
    return {
      name: 'Jiro',
    };
  },
  mounted() {
    this;
    this.propId;
    this.propAidei;
    this.$log.debug(this.$axios);
  },
  methods: {
    debounce() {
      this.$log.debug(this.$axios);
    },
  },
};

// export default Vue.extend(options);
function getMethods(options: Options): Methods {
  const methods = options.methods;
  if (methods !== undefined) {
    return methods;
  }
  throw new Error();
}

export default Vue.extend({
  ...options,
  methods: {
    ...options.methods,
    aaa: _.debounce(() => getMethods(options).debounce(), 200),
  },
});
</script>
