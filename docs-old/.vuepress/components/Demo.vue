<script setup lang="ts">
import { ref, computed, StyleValue, onUnmounted } from 'vue';
import LoadPanel from './LoadPanel.vue';
import { getGitHubUrl, getUrl } from '../utils/playground';
import { usePlaygroundTheme } from '../composables/usePlaygroundTheme';
import { useExpand } from '../composables/useExpand';

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
const expanded = ref(false);
const frame = ref<HTMLIFrameElement | null>(null);

usePlaygroundTheme(frame);
const { expandEnter, expandAfterEnter, expandBeforeLeave } = useExpand();

const styles = computed<StyleValue>(() => ({
  width: props.width,
  height: props.height
}));

const frameUrl = computed(() => getUrl(props.baseUrl, props.url));
const githubUrl = computed(() => getGitHubUrl(props.url));

function onLoad() {
  loading.value = false;
}

function toggleExpand() {
  expanded.value = !expanded.value;
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
          loading="lazy"
          :src="frameUrl"
          @load="onLoad"
        ></iframe>
      </div>
    </div>
    <div class="demo-actions">
      <Icon
        tag="a"
        :href="githubUrl"
        target="_blank"
        class="demo-action"
        title="View on GitHub"
      >
        <GithubIcon />
      </Icon>
      <Icon class="demo-action" title="View source" @click="toggleExpand">
        <ChevronsIcon />
      </Icon>
    </div>
    <transition
      name="demo-source-expand"
      @enter="expandEnter"
      @after-enter="expandAfterEnter"
      @before-leave="expandBeforeLeave"
    >
      <div v-show="expanded" class="demo-source">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
@import 'demo';
</style>
