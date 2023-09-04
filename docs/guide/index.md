---
outline: deep
---

# Getting Started

## Installation

### NPM

```bash:no-line-numbers
$ npm install vue-map-ui leaflet
```

### YARN

```bash:no-line-numbers
$ yarn add vue-map-ui leaflet
```

### PNPM

```bash:no-line-numbers
$ pnpm install vue-map-ui leaflet
```

## Usage

main.ts

```ts
import { createApp } from 'vue';
import App from './App.vue';
// import styles
import 'leaflet/dist/leaflet.css';
import 'vue-map-ui/dist/normalize.css';
import 'vue-map-ui/dist/style.css';
import 'vue-map-ui/dist/theme-all.css';

createApp(App).mount('#app');
```

Map.vue

```vue
<script setup>
import { VMap, VMapOsmTileLayer, VMapZoomControl } from 'vue-map-ui';
</script>

<template>
  <VMap style="height: 200px;">
    <VMapOsmTileLayer />
    <VMapZoomControl />
  </VMap>
</template>
```
