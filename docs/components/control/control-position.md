# ControlPosition

The `VMapControlPosition` component is used to positioning the control on the map.

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-control-position" >
  
<<< @/../playground/pages/control/basic-control-position.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

| Name     | Description                                                                                                                                                                               | Type               | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| position | Pair of string values representing the side name vertically and horizontally. Example: `['top', 'left']` and set `'topleft'` value for the `position` property in the control components. | `[string, string]` | —       |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name            | Description           | Type                       |
| --------------- | --------------------- | -------------------------- |
| positionElement | Position DOM element. | `Ref<HTMLElement \| null>` |
