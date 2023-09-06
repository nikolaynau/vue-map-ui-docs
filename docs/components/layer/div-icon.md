# DivIcon

The `VMapDivIcon` component is used to represent a lightweight icon for markers that uses a simple \<div\> element instead of an image.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-div-icon" >
  
<<< @/../playground/pages/layer/basic-div-icon.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use div icon options from leaflet [documentation](https://leafletjs.com/reference.html#div-icon).

| Name         | Description                                                                                                                                                                                                                                               | Type                                                      | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------- |
| html         | Custom HTML code to put inside the div element, empty by default. Alternatively, an instance of HTMLElement.                                                                                                                                              | `string \| HTMLElement \| false`                          | —       |
| bgPos        | Optional relative position of the background, in pixels.                                                                                                                                                                                                  | [PointExpression](/components/types.html#pointexpression) | —       |
| iconSize     | Size of the icon div in pixels.                                                                                                                                                                                                                           | [PointExpression](/components/types.html#pointexpression) | —       |
| iconAnchor   | The coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical position. Centered by default if size is specified, also can be set in CSS with negative margins. | [PointExpression](/components/types.html#pointexpression) | —       |
| renderMode   | Rendering mode of the content passed in the default slot. Values: `html`, `node`, `portal`, `none`.                                                                                                                                                       | `string`                                                  | 'html'  |
| rootClass    | Root element css class in `node` and `portal` rendering mode. You can pass the same value as in the vue `class` property.                                                                                                                                 | `any`                                                     | —       |
| className    | A custom class name to assign to both icon and shadow images. Empty by default. You can pass the same value as in the vue `class` property.                                                                                                               | `any`                                                     | —       |
| knownClasses | Here you can specify a list of classes that the leaflet library adds. This is necessary for the properties `className` and `class` to work correctly. By default, the list of internal classes of the leaflet library is used.                            | `string[]`                                                | —       |

### Events

No events.

### Slots

| Name    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| default | The default slot can be used to create icon content and extend behavior. |

### Exposes

| Name | Description                | Type                                                   |
| ---- | -------------------------- | ------------------------------------------------------ |
| icon | Leaflet div icon instance. | Ref<[DivIcon](/components/types.html#divicon) \| null> |
