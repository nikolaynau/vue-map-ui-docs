# Marker

The `VMapMarker` component is used to display clickable/draggable icons on the map.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-marker" >
  
<<< @/../playground/pages/layer/basic-marker.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use marker options from leaflet [documentation](https://leafletjs.com/reference.html#marker).

| Name                | Description                                                                                                                                                                                                                           | Type                                                                             | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------- |
| \* latlng / v-model | Position of the marker as a geographic point on the map. If you pass `null` then the marker will not be created until the value appears. **Required**                                                                                 | [LatLngExpression](/components/types.html#latlngexpression) \| null              | —       |
| icon                | Icon instance to use for rendering the marker. If not specified, a common instance of [L.Icon.Default](https://leafletjs.com/reference.html#icon-default) is used.                                                                    | [Icon](/components/types.html#icon) \| [DivIcon](/components/types.html#divicon) | —       |
| opacity             | The opacity of the marker.                                                                                                                                                                                                            | `number`                                                                         | —       |
| zIndexOffset        | By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like 1000 (or high negative value, respectively). | `number`                                                                         | —       |
| draggable           | Whether the marker is draggable with mouse/touch or not.                                                                                                                                                                              | `boolean`                                                                        | false   |

### Events

Use marker events from leaflet [documentation](https://leafletjs.com/reference.html#marker-event).

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name   | Description              | Type                                                 |
| ------ | ------------------------ | ---------------------------------------------------- |
| marker | Leaflet marker instance. | Ref<[Marker](/components/types.html#marker) \| null> |
