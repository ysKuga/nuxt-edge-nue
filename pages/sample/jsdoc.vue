<template>
  <div>
    test
  </div>
</template>

<script>
// // @ts-check
import Vue from 'vue';
import {
  // eslint-disable-next-line
  ThisTypedComponentOptionsWithRecordProps as Options
} from 'vue/types/options';

/**
 * @typedef {Object<string, any>} Props
 * @property {string|number} propId ぷろっぷあいでい
 */
/**
 * @typedef {Object<string, any>} Data
 * @property {number} id あいでぃい
 * @property {string} name なまえ
 */
/**
 * @typedef {Object<string, any>} Computed
 * @property {string} computedId けいさんされたあいでい
 */
/**
 * @typedef {Object<string, Function>} Methods
 * @property {{(name): boolean}} checkName なまえをちぇっくするめそっど
 */

/** @type {Options<Vue, Data, Methods, Computed, Props>} */
export const options = {
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};

export default Vue.extend(options);
</script>
