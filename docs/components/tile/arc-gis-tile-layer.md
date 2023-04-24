---
title: ArcGis
sidebarDepth: 0
---

# ArcGisTileLayer

The `VMapArcGisTileLayer` component is used to load and display [ArcGIS](https://www.arcgis.com) tiles on the map.

## Basic usage

<ClientOnly>
  <Demo url="/tile/basic-arc-gis-tile-layer" >
  
  @[code vue:no-line-numbers](@playground/tile/basic-arc-gis-tile-layer.vue)
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use tile layer options from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer).

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
