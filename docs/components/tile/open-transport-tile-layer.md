# OpenTransportTileLayer

The `VMapOpenTransportTileLayer` component is used to load and display [Thunderforest](https://www.thunderforest.com) tiles on the map.

## Basic usage

<ClientOnly>
  <Demo url="/tile/basic-open-transport-tile-layer" >
  
<<< @/../playground/pages/tile/basic-open-transport-tile-layer.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use tile layer options from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer).

| Name      | Description                                                                                                        | Type      | Default          |
| --------- | ------------------------------------------------------------------------------------------------------------------ | --------- | ---------------- |
| \* apiKey | Api key for loading tiles. See more [Thunderforest Docs](https://www.thunderforest.com/docs/apikeys). **Required** | `string`  | —                |
| title     | Name of layer, when used as a child component [layers control](/components/control/layers-control).                | `string`  | 'Open Transport' |
| overlay   | Overlay layer, when used as a child component [layers control](/components/control/layers-control).                | `boolean` | false            |

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
