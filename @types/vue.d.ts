import Vue, { ComponentOptions } from 'vue';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // This adds the `middleware` property to the existing `vue/types/options/ComponentOptions` type
    middleware?: string | string[];
  }
}
