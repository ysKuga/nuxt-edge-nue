<template>
  <div>
    test
  </div>
</template>

<script>
// // @ts-check
import Vue from 'vue';

export default Vue.extend({
  /**
   * @typedef {Object<string, any>} Props
   * @property {string|number} propId ぷろっぷあいでい
   */
  /** @type {import("vue/types/options").RecordPropsDefinition<Props>} */
  props: {
    propId: {
      type: String,
      default: () => 'aidei',
    },
  },
  /**
   * @typedef {Object<string, any>} Data
   * @property {number} id あいでぃい
   * @property {string} name なまえ
   */
  /** @typedef {import("vue/types/options").DataDef<Data, Props, Vue>} DataDef */
  /**
   * @type {DataDef}
   * @return {Data}
   */
  data() {
    return {};
  },
  /**
   * @typedef {Object<string, any>} Computed
   * @property {string} computedId けいさんされたあいでい
   */
  /** @type {import("vue/types/options").Accessors<Computed>} */
  computed: {},
  mounted() {},
  /**
   * @typedef {Object<string, Function>} Methods
   * @property {{(name): boolean}} checkName なまえをちぇっくするめそっど
   */
  /** @type {Methods} */
  methods: {},
});
</script>
