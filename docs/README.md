---
home: true
title: Vue 3 UI Framework
heroImage: logo.png
heroText: Vue Map
tagline: Vue 3 Components for your project using Leaflet map.
actions:
  - text: Get Started →
    link: /guide/quick-start.html
    type: primary
  - text: Components
    link: /components/map/map.html
    type: secondary
features:
  - title: Easy to use
    details: Most component is ready for use without specifying propetries.
  - title: Using DataSource
    details: Сomponents use abstract data sources to connect any api.
  - title: Examples
    details: Many examples will help you quickly understand how to use components.
footer: MIT Licensed | Copyright © 2023
---

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
