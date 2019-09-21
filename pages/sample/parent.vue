<template>
  <div>
    parent
    <child>
      <template v-slot="slotProps">
        child 使用
        {{ vs(slotProps) }}
        {{ vs(slotProps).id }}
        {{ vs(slotProps).namae }}
        <!-- {{ vs(slotProps).abababab }} -->
      </template>
    </child>
  </div>
</template>

<script>
import Child, { vs } from './child.vue';

export default {
  components: {
    Child,
  },
  methods: {
    vs,
  },
};
</script>
