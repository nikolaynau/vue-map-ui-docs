<script setup lang="ts">
import { ref, computed, StyleValue, onUnmounted } from 'vue';
import LoadPanel from './LoadPanel.vue';
import { getUrl } from '../utils/playground';
import { usePlaygroundTheme } from '../composables/usePlaygroundTheme';

export interface Props {
  url?: string;
  baseUrl?: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '25rem'
});

const loading = ref(true);
const frame = ref<HTMLIFrameElement | null>(null);
usePlaygroundTheme(frame);

const styles = computed<StyleValue>(() => ({
  width: props.width,
  height: props.height
}));

const frameUrl = computed(() => getUrl(props.baseUrl, props.url));

function onLoad() {
  loading.value = false;
}
</script>

<template>
  <div class="demo">
    <div v-if="url" class="demo-display" :style="styles">
      <LoadPanel v-if="loading" />
      <div class="demo-frame-container">
        <iframe
          ref="frame"
          class="demo-frame"
          :src="frameUrl"
          @load="onLoad"
        ></iframe>
      </div>
    </div>
    <div class="demo-actions">
      <Icon class="demo-action" title="View on GitHub">
        <GithubIcon />
      </Icon>
      <Icon class="demo-action" title="View source">
        <ChevronsIcon />
      </Icon>
    </div>
  </div>
</template>

<style lang="scss">
@import 'demo';
</style>
