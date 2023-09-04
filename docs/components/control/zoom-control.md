# ZoomControl

The `VMapZoomControl` component is used to zoom in and out of the map.

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-zoom-control" >
  
<<< @/../playground/pages/control/basic-zoom-control.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use zoom control options from leaflet [documentation](https://leafletjs.com/reference.html#control-zoom).

| Name     | Description                                                                                 | Type                                                                                                                             | Default       |
| -------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| disabled | If true, then zoom control is disabled.                                                     | `boolean`                                                                                                                        | false         |
| position | The position of the control (one of the corners of the map). See types for possible values. | [ControlPosition](/components/types.html#controlposition) \| [ExtraControlPosition](/components/types.html#extracontrolposition) | 'centerright' |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name        | Description                    | Type                                                             |
| ----------- | ------------------------------ | ---------------------------------------------------------------- |
| zoomControl | Leaflet zoom control instance. | Ref<[Control.Zoom](/components/types.html#control-zoom) \| null> |
