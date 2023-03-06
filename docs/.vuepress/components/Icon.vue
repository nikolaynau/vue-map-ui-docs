<script setup lang="ts">
export interface Props {
  tag?: string;
}

withDefaults(defineProps<Props>(), {
  tag: 'i'
});
</script>
<template>
  <component :is="tag" class="v-icon">
    <slot></slot>
  </component>
</template>

<style lang="scss">
@import 'icon';
</style>
