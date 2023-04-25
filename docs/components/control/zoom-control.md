---
title: Zoom Control
sidebarDepth: 0
---

# ZoomControl

The `VMapZoomControl` component is used to zoom in and out of the map.

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-zoom-control" >
  
  @[code vue:no-line-numbers](@playground/control/basic-zoom-control.vue)
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use zoom control options from leaflet [documentation](https://leafletjs.com/reference.html#control-zoom).

| Name     | Description                             | Type      | Default |
| -------- | --------------------------------------- | --------- | ------- |
| disabled | if true, then zoom control is disabled. | `boolean` | false   |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name        | Description                    | Type                                                     |
| ----------- | ------------------------------ | -------------------------------------------------------- |
| zoomControl | Leaflet zoom control instance. | Ref<[Control.Zoom](/components/types.html#control-zoom)> |
