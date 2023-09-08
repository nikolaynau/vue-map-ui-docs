# MapPane

The `VMapPane` component is used to create a new pane. Panes are DOM elements used to control the ordering of layers on the map.

## Basic usage

<ClientOnly>
  <Demo url="/map/basic-map-pane" >
  
<<< @/../playground/pages/map/basic-map-pane.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

| Name    | Description                                                                 | Type     | Default |
| ------- | --------------------------------------------------------------------------- | -------- | ------- |
| \* name | Name of the panel, used to add markers, etc. **Required**                   | `string` | —       |
| zIndex  | Define the order of the panels on the map.                                  | `number` | —       |
| class   | The CSS class value. You can pass the `object`, `array` and `string` value. | `any`    | —       |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name        | Description         | Type                       |
| ----------- | ------------------- | -------------------------- |
| paneElement | Returns a map pane. | `Ref<HTMLElement \| null>` |
