# Auto Import

## Installation

```bash
$ npm install -D unplugin-vue-map-ui unplugin-vue-components
```

## Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { VueMapUiResolver, VueMapUiPreset } from 'unplugin-vue-map-ui';

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [VueMapUiResolver()],
      types: [VueMapUiPreset]
    })
  ]
});
```

## Webpack

```ts
// webpack.config.js
const Components = require('unplugin-vue-components/webpack');
const { VueMapUiResolver, VueMapUiPreset } = require('unplugin-vue-map-ui');

module.exports = {
  // ...
  plugins: [
    Components({
      resolvers: [VueMapUiResolver()],
      types: [VueMapUiPreset]
    })
  ]
};
```

## Typescript

> If you use typescript, make sure you also add auto generated `components.d.ts` to your `tsconfig.json` under `include`.
