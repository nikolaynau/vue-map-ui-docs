# TileLayer

The `VMapTileLayer` component is used to load and display tile layers on the map.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-tile-layer" >
  
<<< @/../playground/pages/layer/basic-tile-layer.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use tile layer options from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer).

| Name    | Description                                                                                         | Type      | Default |
| ------- | --------------------------------------------------------------------------------------------------- | --------- | ------- |
| \* url  | Tile layer URL template. **Required**                                                               | `string`  | —       |
| title   | Name of layer, when used as a child component [layers control](/components/control/layers-control). | `string`  | —       |
| overlay | Overlay layer, when used as a child component [layers control](/components/control/layers-control). | `boolean` | false   |

### Events

Use tile layer events from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer-event).

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name      | Description                  | Type                                                       |
| --------- | ---------------------------- | ---------------------------------------------------------- |
| tileLayer | Leaflet tile layer instance. | Ref<[TileLayer](/components/types.html#tilelayer) \| null> |
