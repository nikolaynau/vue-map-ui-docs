---
title: Quick Start
description: Quick start with Map UI
sidebarDepth: 1
meta:
  - name: og:title
    content: Quick Start
  - name: og:description
    content: Quick start with Map UI
---

# Quick Start

## Installation

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
$ npm install vue-map-ui leaflet
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
$ yarn add vue-map-ui leaflet
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
$ pnpm install vue-map-ui leaflet
```

  </CodeGroupItem>
</CodeGroup>

## Usage

main.ts

```ts
import { createApp } from 'vue';
import App from './App.vue';
// import styles
import 'leaflet/dist/leaflet.css';
import 'vue-map-ui/dist/normalize.css';
import 'vue-map-ui/dist/style.css';

createApp(App).mount('#app');
```

Map.vue

```vue
<script setup>
import { VMap, VMapOsmTileLayer } from 'vue-map-ui';
</script>

<template>
  <VMap style="height: 200px;">
    <VMapOsmTileLayer />
  </VMap>
</template>
```

## Auto import

```bash
$ npm install -D unplugin-vue-map-ui unplugin-vue-components
```

### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { VueMapUiResolver } from 'unplugin-vue-map-ui';

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [VueMapUiResolver()]
    })
  ]
});
```

### Webpack

```ts
// webpack.config.js
const Components = require('unplugin-vue-components/webpack');
const { VueMapUiResolver } = require('unplugin-vue-map-ui');

module.exports = {
  // ...
  plugins: [
    Components({
      resolvers: [VueMapUiResolver()]
    })
  ]
};
```

## Volar support

If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.

```js
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-map-ui/global"]
  }
}
```

## Typescript

If you use typescript, please add the type definitions fot `leaflet` library.

```bash
$ npm install -D @types/leaflet
```

## Nuxt

For Nuxt users, you only need to install `nuxt-vue-map-ui`.

```bash
$ npm install -D nuxt-vue-map-ui
```

Then add the code below into your config file.

```js
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-vue-map-ui'],
  vueMap: {
    /** Options */
  }
});
```

Refer to the [docs](https://github.com/nikolaynau/nuxt-vue-map-ui#readme) for how to configure it.
