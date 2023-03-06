---
sidebarDepth: 0
---

# Map

The `VMap` component is used to create a map. This base component contains and wraps all other components.

## Basic usage

<ClientOnly>
  <Demo url="/map/basic" >
  
  @[code vue:no-line-numbers](@playground/map/basic.vue)
  
  </Demo>
</ClientOnly>

## Map API

### Map Attributes

Use map options from leaflet [documentation](https://leafletjs.com/reference.html#map).
The table contains a list of watched attributes.

| Name         | Description                                                   | Type                                                                                    | Default                  |
| ------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------ |
| center       | Initial geographic center of the map                          | [LatLngExpression](/vue-map-ui-docs/components/types.html#latlngexpression)             | [0, 0]                   |
| zoom         | Initial map zoom level                                        | `number`                                                                                | 0                        |
| bounds       | Initial geographic bounds of the map                          | [LatLngBoundsExpression](/vue-map-ui-docs/components/types.html#latlngboundsexpression) | —                        |
| useFly       | Initial center, zoom and bounds use fly methods               | `boolean`                                                                               | false                    |
| elementAttrs | List of attributes that will be inherited to the map element. | `Array<string>`                                                                         | ['id', 'class', 'style'] |

### Map Events

Use map events from leaflet [documentation](https://leafletjs.com/reference.html#map-event).

| Name         | Description                   | Type                                                                        |
| ------------ | ----------------------------- | --------------------------------------------------------------------------- |
| view-changed | Triggers when moved map view. | [ViewChangedEvent](/vue-map-ui-docs/components/types.html#viewchangedevent) |

### Map Slots

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | The default slot is used for all map component. |

### Map Exposes

| Name      | Description            | Type                                                   |
| --------- | ---------------------- | ------------------------------------------------------ |
| map       | Leaflet map instance.  | Ref<[Map](/vue-map-ui-docs/components/types.html#map)> |
| container | Map container element. | `Ref<HTMLElement>`                                     |
