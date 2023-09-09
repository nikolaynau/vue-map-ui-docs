# DefaultIcon

The `VMapDefaultIcon` component is used to represent the blue marker image.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-default-icon" >
  
<<< @/../playground/pages/layer/basic-default-icon.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use default icon options from leaflet [documentation](https://leafletjs.com/reference.html#icon-default).

| Name         | Description                                                                                                                                                                                                                    | Type       | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------- |
| imagePath    | Icon will try to auto-detect the path of the blue icon images. If you are placing these images in a non-standard way, set this option to point to the right path.                                                              | `string`   | —       |
| knownClasses | Here you can specify a list of classes that the leaflet library adds. This is necessary for the properties `className` and `class` to work correctly. By default, the list of internal classes of the leaflet library is used. | `string[]` | —       |
| className    | A custom class name to assign to both icon and shadow images. Empty by default. The value of this property is combined with and is equivalent to the `class` property.                                                         | `any`      | —       |
| class        | The CSS class value. You can pass the `object`, `array` and `string` value.                                                                                                                                                    | `any`      | —       |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name | Description            | Type                                             |
| ---- | ---------------------- | ------------------------------------------------ |
| icon | Leaflet icon instance. | Ref<[Icon](/components/types.html#icon) \| null> |
