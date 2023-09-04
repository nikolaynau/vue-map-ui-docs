# ScaleControl

The `VMapScaleControl` component is used to shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems.

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-scale-control" >
  
<<< @/../playground/pages/control/basic-scale-control.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use scale control options from leaflet [documentation](https://leafletjs.com/reference.html#control-scale).

| Name     | Description                                                                                 | Type                                                                                                                             | Default       |
| -------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| imperial | Whether to show the imperial scale line (mi/ft). Disabled by default.                       | `number`                                                                                                                         | false         |
| position | The position of the control (one of the corners of the map). See types for possible values. | [ControlPosition](/components/types.html#controlposition) \| [ExtraControlPosition](/components/types.html#extracontrolposition) | 'bottomright' |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name         | Description                     | Type                                                               |
| ------------ | ------------------------------- | ------------------------------------------------------------------ |
| scaleControl | Leaflet scale control instance. | Ref<[Control.Scale](/components/types.html#control-scale) \| null> |
