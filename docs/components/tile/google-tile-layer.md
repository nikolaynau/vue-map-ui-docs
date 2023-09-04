# GoogleTileLayer

The `VMapGoogleTileLayer` component is used to load and display [Google Map](https://developers.google.com/maps/documentation) tiles on the map.

## Basic usage

<ClientOnly>
  <Demo url="/tile/basic-google-tile-layer" >
  
<<< @/../playground/pages/tile/basic-google-tile-layer.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use tile layer options from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer).

| Name       | Description                                                                            | Type       | Default                      |
| ---------- | -------------------------------------------------------------------------------------- | ---------- | ---------------------------- |
| type       | Type of display layer on the map. Values: `hybrid`, `satellite`, `streets`, `terrain`. | `string`   | 'streets'                    |
| layers     | Custom display layer type. If specified, overwrites the `type` attribute.              | `string`   | —                            |
| subdomains | List of third-level domains. Used to create the url of the tiles.                      | `string[]` | ['mt0', 'mt1', 'mt2', 'mt3'] |
| title      | Name of layer. Used in [layers control](/components/control/layers-control.html).      | `string`   | 'Google'                     |
| overlay    | Overlay layer. Used in [layers control](/components/control/layers-control.html).      | `boolean`  | false                        |

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
