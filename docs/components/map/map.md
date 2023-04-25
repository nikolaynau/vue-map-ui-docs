---
sidebarDepth: 0
---

# Map

The `VMap` component is used to create a map. This base component contains and wraps all other components.

## Basic usage

<ClientOnly>
  <Demo url="/map/basic-map" >
  
  @[code vue:no-line-numbers](@playground/map/basic-map.vue)
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use map options from leaflet [documentation](https://leafletjs.com/reference.html#map).

| Name         | Description                                                   | Type                                                                    | Default                  |
| ------------ | ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------ |
| center       | Initial geographic center of the map.                         | [LatLngExpression](/components/types.html#latlngexpression)             | [0, 0]                   |
| zoom         | Initial map zoom level.                                       | `number`                                                                | 0                        |
| bounds       | Initial geographic bounds of the map.                         | [LatLngBoundsExpression](/components/types.html#latlngboundsexpression) | —                        |
| useFly       | Initial center, zoom and bounds use fly methods.              | `boolean`                                                               | false                    |
| elementAttrs | List of attributes that will be inherited to the map element. | `string[]`                                                              | ['id', 'class', 'style'] |

### Events

Use map events from leaflet [documentation](https://leafletjs.com/reference.html#map-event).

| Name         | Description                   | Type                                                        |
| ------------ | ----------------------------- | ----------------------------------------------------------- |
| view-changed | Triggers when moved map view. | [ViewChangedEvent](/components/types.html#viewchangedevent) |

### Slots

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | The default slot is used for all map component. |

### Exposes

| Name      | Description            | Type                                   |
| --------- | ---------------------- | -------------------------------------- |
| map       | Leaflet map instance.  | Ref<[Map](/components/types.html#map)> |
| container | Map container element. | `Ref<HTMLElement>`                     |
