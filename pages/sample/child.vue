<template>
  <div>
    child
    <slot :id="id" :namae="namae" />
  </div>
</template>

<script>
/**
 * @typedef {Object<string, any>} SlotProps
 * @property {number} id
 * @property {string} namae
 */
/**
 * @param {SlotProps} slotProps
 * @return {SlotProps}
 */
export const vs = slotProps => slotProps;

export default {
  data() {
    return {
      id: 1,
      namae: 'Taro',
    };
  },
  /**
   * @typedef {Object<string, Function>} Methods
   * @property {{(name: string): boolean}} checkName なまえをちぇっくするめそっど
   */
  /** @type {Methods} */
  methods: {
    checkName(name) {
      return !!name;
    },
  },
};
</script>
