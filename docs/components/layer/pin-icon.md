# PinIcon

The `VMapPinIcon` component is used to represent an icon as a pin.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-pin-icon" >
  
<<< @/../playground/pages/layer/basic-pin-icon.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use div icon options from leaflet [documentation](https://leafletjs.com/reference.html#div-icon).

| Name             | Description                                                                                                                                                                                                                                               | Type                                                      | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------- |
| color            | Icon color.                                                                                                                                                                                                                                               | `string`                                                  | —       |
| backgroundColor  | Background color. Defaults to the value of the `color` property.                                                                                                                                                                                          | `string`                                                  | —       |
| placeholderColor | The color of the area where the svg icon is placed.                                                                                                                                                                                                       | `string`                                                  | —       |
| html             | Custom HTML code to put inside the div element, empty by default. Alternatively, an instance of HTMLElement.                                                                                                                                              | `string \| HTMLElement \| false`                          | —       |
| bgPos            | Optional relative position of the background, in pixels.                                                                                                                                                                                                  | [PointExpression](/components/types.html#pointexpression) | —       |
| iconSize         | Size of the icon div in pixels.                                                                                                                                                                                                                           | [PointExpression](/components/types.html#pointexpression) | —       |
| iconAnchor       | The coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical position. Centered by default if size is specified, also can be set in CSS with negative margins. | [PointExpression](/components/types.html#pointexpression) | —       |
| renderMode       | Rendering mode of the content passed in the default slot. Values: `html`, `node`, `portal`, `none`.                                                                                                                                                       | `string`                                                  | 'html'  |
| rootClass        | Root element css class in `node` and `portal` rendering mode. You can pass the same value as in the vue `class` property.                                                                                                                                 | `any`                                                     | —       |
| className        | A custom class name to assign to both icon and shadow images. Empty by default. You can pass the same value as in the vue `class` property.                                                                                                               | `any`                                                     | —       |
| knownClasses     | Here you can specify a list of classes that the leaflet library adds. This is necessary for the properties `className` and `class` to work correctly. By default, the list of internal classes of the leaflet library is used.                            | `string[]`                                                | —       |
| class            | The CSS class value. You can pass the `object`, `array` and `string` value.                                                                                                                                                                               | `any`                                                     | —       |

### Events

No events.

### Slots

| Name    | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| default | The default slot can be used to represent svg icon or font icon. |

### Exposes

| Name | Description                | Type                                                   |
| ---- | -------------------------- | ------------------------------------------------------ |
| icon | Leaflet div icon instance. | Ref<[DivIcon](/components/types.html#divicon) \| null> |
