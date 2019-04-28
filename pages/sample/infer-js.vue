<template>
  <div v-if="test()">
    aaa
    {{ propId }}
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
class Entity {
  id = 1;
  name = 'entetei';
}

export default Vue.extend({
  props: {
    /** @type {NumberConstructor} */
    propId: {
      type: Number,
      default() {
        return 1;
      },
    },
    /** @type {{ new (): Entity }} */
    propEntity: {
      type: Entity,
      default() {
        return new Entity();
      },
    },
    // props に関数を指定する場合 default の戻り値でなく、default自体が初期値となるもよう
    /** @type {FunctionConstructor} */
    propFunction: {
      type: Function,
      default() {
        return 1;
      },
    },
  },
  data() {
    return {
      name: 'taro',
      lodash: _,
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: {
        f: {
          g: 5,
        },
      },
    };
  },
  computed: {
    entity: () => Entity,
    /**
     * @returns {string}
     */
    computedName() {
      return this.name;
    },
    typedName() {
      /** @type {string} */
      const name = this.name;
      return name;
    },
    fullName() {
      return `sato ${this.name}`;
    },
    trimmedName() {
      return this.name.trim();
    },
  },
  watch: {
    a: function(val, oldVal) {
      // /** @type {Vue} */
      // const self = this;
      this.$log.debug('new: %s, old: %s', val, oldVal);
    },
    /**
     */
    b: _.debounce(
      /**
       * @
       * @param {number} val
       * @param {number} val
       */
      function(val, oldVal) {
        this.$log.debug('new: %s, old: %s', val, oldVal);
      },
      500
    ),
  },
  mounted() {
    // (property) propId: number
    this.propId;
    // (property) propNo: number
    this.propNo;
    // (property) propEntity: Entity
    this.propEntity;
    // (property) propFunction: Function
    this.propFunction;
    // (property) name: string
    this.name;
    // (property) computedName: string
    this.computedName;
    // (property) typedName: string
    this.typedName;
    // (property) fullName: string
    this.fullName;
    // props も含めて定義されていると data の直接の推論がきくもよう
    // (property) trimmedName: string
    this.trimmedName;
  },
  methods: {
    /**
     * @param {string} [aaa]
     */
    test(aaa) {
      return aaa;
    },
  },
});
</script>
