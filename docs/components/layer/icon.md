# Icon

The `VMapIcon` component is used to represent the icon that will be provided when the marker is created.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-icon" >
  
<<< @/../playground/pages/layer/basic-icon.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use icon options from leaflet [documentation](https://leafletjs.com/reference.html#icon).

| Name            | Description                                                                                                                                                                                                                                               | Type                                                      | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------- |
| iconUrl         | The URL to the icon image (absolute or relative to your script path). If you pass `null` then the icon will not be created until the value appears. **Required**                                                                                          | `string \| null`                                          | —       |
| iconRetinaUrl   | The URL to a retina sized version of the icon image (absolute or relative to your script path). Used for Retina screen devices.                                                                                                                           | `string`                                                  | —       |
| iconSize        | Size of the icon image in pixels.                                                                                                                                                                                                                         | [PointExpression](/components/types.html#pointexpression) | —       |
| iconAnchor      | The coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical position. Centered by default if size is specified, also can be set in CSS with negative margins. | [PointExpression](/components/types.html#pointexpression) | —       |
| shadowUrl       | The URL to the icon shadow image. If not specified, no shadow image will be created.                                                                                                                                                                      | `string`                                                  | —       |
| shadowRetinaUrl | The URL to a retina sized version of the icon shadow image (absolute or relative to your script path). Used for Retina screen devices.                                                                                                                    | `string`                                                  | —       |
| shadowSize      | Size of the shadow image in pixels.                                                                                                                                                                                                                       | [PointExpression](/components/types.html#pointexpression) | —       |
| shadowAnchor    | The coordinates of the "tip" of the shadow (relative to its top left corner) (the same as iconAnchor if not specified).                                                                                                                                   | [PointExpression](/components/types.html#pointexpression) | —       |
| knownClasses    | Here you can specify a list of classes that the leaflet library adds. This is necessary for the properties `className` and `class` to work correctly. By default, the list of internal classes of the leaflet library is used.                            | `string[]`                                                | —       |
| className       | A custom class name to assign to both icon and shadow images. Empty by default. The value of this property is combined with and is equivalent to the `class` property.                                                                                    | `any`                                                     | —       |
| class           | The CSS class value. You can pass the `object`, `array` and `string` value.                                                                                                                                                                               | `any`                                                     | —       |

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
