---
title: Tile Layer
sidebarDepth: 0
---

# TileLayer

The `VMapTileLayer` component is used to load and display tile layers on the map.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-tile-layer" >
  
  @[code vue:no-line-numbers](@playground/layer/basic-tile-layer.vue)
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use tile layer options from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer).

| Name | Description              | Type   | Default |
| ---- | ------------------------ | ------ | ------- |
| url  | Tile layer URL template. | string | —       |

### Events

Use tile layer events from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer-event).

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name      | Description                  | Type                                               |
| --------- | ---------------------------- | -------------------------------------------------- |
| tileLayer | Leaflet tile layer instance. | Ref<[TileLayer](/components/types.html#tilelayer)> |
