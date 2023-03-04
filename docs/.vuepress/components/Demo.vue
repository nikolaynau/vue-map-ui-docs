<script setup lang="ts">
import { ref, computed, StyleValue } from 'vue';
import LoadPanel from './LoadPanel.vue';

export interface Props {
  url?: string;
  baseUrl?: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '25rem',
  baseUrl: '/vue-map-ui-docs/playground/'
});

const loading = ref(true);

const styles = computed<StyleValue>(() => ({
  width: props.width,
  height: props.height
}));

function normalizeUrl(url: string) {
  if (url.startsWith('/')) {
    return url.slice(1);
  }
  return url;
}

const frameUrl = computed(
  () => `${props.baseUrl}${normalizeUrl(props.url ?? '')}`
);

function onLoad() {
  loading.value = false;
}
</script>

<template>
  <div class="demo">
    <div v-if="url" class="demo-display" :style="styles">
      <LoadPanel v-if="loading" />
      <div class="demo-frame-container">
        <iframe class="demo-frame" :src="frameUrl" @load="onLoad"></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'demo';
</style>
