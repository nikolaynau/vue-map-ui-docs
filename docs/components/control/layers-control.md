# LayersControl

The `VMapLayersControl` component is used to switch between different base layers and switch overlays on/off.

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-layers-control" >
  
<<< @/../playground/pages/control/basic-layers-control.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use layers control options from leaflet [documentation](https://leafletjs.com/reference.html#control-layers).

| Name                       | Description                                                                                 | Type                                                                                                                             | Default    |
| -------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| currentBaseLayer / v-model | Index or title of the selected layer.                                                       | `string \| number`                                                                                                               | 0          |
| currentOverlays / v-model  | Array of indexes or titles for selected overlays.                                           | `string[] \| number[]`                                                                                                           | —          |
| useIndexes                 | If true, then the number indexes in `currentBaseLayer` and `currentOverlays` will be used.  | `boolean`                                                                                                                        | false      |
| position                   | The position of the control (one of the corners of the map). See types for possible values. | [ControlPosition](/components/types.html#controlposition) \| [ExtraControlPosition](/components/types.html#extracontrolposition) | 'topright' |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name          | Description                      | Type                                                                 |
| ------------- | -------------------------------- | -------------------------------------------------------------------- |
| layersControl | Leaflet layers control instance. | Ref<[Control.Layers](/components/types.html#control-layers) \| null> |
