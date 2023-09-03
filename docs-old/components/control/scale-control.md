---
title: Scale Control
sidebarDepth: 0
---

# ScaleControl

The `VMapScaleControl` component is used to shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems.

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-scale-control" >
  
  @[code vue:no-line-numbers](@playground/control/basic-scale-control.vue)
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use scale control options from leaflet [documentation](https://leafletjs.com/reference.html#control-scale).

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name         | Description                     | Type                                                      |
| ------------ | ------------------------------- | --------------------------------------------------------- |
| scaleControl | Leaflet scale control instance. | Ref<[Control.Scale](/components/types.html#control-scale)> |
