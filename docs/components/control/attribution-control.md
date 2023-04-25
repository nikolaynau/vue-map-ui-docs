---
title: Attribution Control
sidebarDepth: 0
---

# AttributionControl

The `VMapAttributionControl` component is used to display attribution data in a small text box on a map.

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-attribution-control" >
  
  @[code vue:no-line-numbers](@playground/control/basic-attribution-control.vue)
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use attribution control options from leaflet [documentation](https://leafletjs.com/reference.html#control-attribution).

| Name         | Description                                                          | Type             | Default |
| ------------ | -------------------------------------------------------------------- | ---------------- | ------- |
| prefix       | The HTML text shown before the attributions. Pass `null` to disable. | `string \| null` | —       |
| attributions | Custom attributions text (e.g. '&copy; OpenStreetMap contributors'). | `string[]`       | —       |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name               | Description                           | Type                                                                   |
| ------------------ | ------------------------------------- | ---------------------------------------------------------------------- |
| attributionControl | Leaflet attribution control instance. | Ref<[Control.Attribution](/components/types.html#control-attribution)> |
