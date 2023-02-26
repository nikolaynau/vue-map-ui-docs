---
title: Quick Start
description: Quick start with Map UI
meta:
  - name: og:title
    content: Quick Start
  - name: og:description
    content: Quick start with Map UI
---

# Quick Start

## Installation

#### NPM

```bash
$ npm install vue-map-ui leaflet
```

#### Yarn

```bash
$ yarn add vue-map-ui leaflet
```

#### pnpm

```bash
$ pnpm install vue-map-ui leaflet
```

## Usage

```html
<script setup>
import { VMap, VMapOsmTileLayer } from 'vue-map-ui';
</script>

<template>
  <VMap style="height: 200px;">
    <VMapOsmTileLayer />
  </VMap>
</template>
```
