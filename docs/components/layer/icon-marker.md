# IconMarker

The `VMapIconMarker` component is used to represent [marker](/components/layer/marker) and [icon](/components/layer/icon) in one component.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-icon-marker" >
  
<<< @/../playground/pages/layer/basic-icon-marker.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use marker options from leaflet [documentation](https://leafletjs.com/reference.html#marker).

| Name                | Description                                                                                                                                                                                                                                                                                                                                          | Type                                                                | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| \* latlng / v-model | Position of the marker as a geographic point on the map. If you pass `null` then the marker will not be created until the value appears. **Required**                                                                                                                                                                                                | [LatLngExpression](/components/types.html#latlngexpression) \| null | —       |
| \* iconUrl          | The URL to the icon image (absolute or relative to your script path). If you pass `null` then the icon will not be created until the value appears. **Required**                                                                                                                                                                                     | `string \| null`                                                    | —       |
| iconRetinaUrl       | The URL to a retina sized version of the icon image (absolute or relative to your script path). Used for Retina screen devices.                                                                                                                                                                                                                      | `string`                                                            | —       |
| iconSize            | Size of the icon image in pixels.                                                                                                                                                                                                                                                                                                                    | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconAnchor          | The coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical position. Centered by default if size is specified, also can be set in CSS with negative margins.                                                                                            | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconShadowUrl       | The URL to the icon shadow image. If not specified, no shadow image will be created.                                                                                                                                                                                                                                                                 | `string`                                                            | —       |
| iconShadowRetinaUrl | The URL to a retina sized version of the icon shadow image (absolute or relative to your script path). Used for Retina screen devices.                                                                                                                                                                                                               | `string`                                                            | —       |
| iconShadowSize      | Size of the shadow image in pixels.                                                                                                                                                                                                                                                                                                                  | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconShadowAnchor    | The coordinates of the "tip" of the shadow (relative to its top left corner) (the same as iconAnchor if not specified).                                                                                                                                                                                                                              | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconKnownClasses    | Here you can specify a list of classes that the leaflet library adds. This is necessary for the properties `className` and `class` to work correctly. By default, the list of internal classes of the leaflet library is used.                                                                                                                       | `string[]`                                                          | —       |
| iconClassName       | A custom class name to assign to both icon and shadow images. Empty by default. The value of this property is combined with and is equivalent to the `class` property.                                                                                                                                                                               | `any`                                                               | —       |
| iconClass           | The CSS class value. You can pass the `object`, `array` and `string` value.                                                                                                                                                                                                                                                                          | `any`                                                               | —       |
| iconCrossOrigin     | Whether the crossOrigin attribute will be added to the tiles. If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data. Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) for valid String values. | [CrossOrigin](/components/types.html#crossorigin) \| boolean        | —       |
| iconPopupAnchor     | The coordinates of the point from which popups will "open", relative to the icon anchor.                                                                                                                                                                                                                                                             | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconTooltipAnchor   | The coordinates of the point from which tooltips will "open", relative to the icon anchor.                                                                                                                                                                                                                                                           | [PointExpression](/components/types.html#pointexpression)           | —       |

### Events

Use marker events from leaflet [documentation](https://leafletjs.com/reference.html#marker-event).

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name   | Description              | Type                                                 |
| ------ | ------------------------ | ---------------------------------------------------- |
| marker | Leaflet marker instance. | Ref<[Marker](/components/types.html#marker) \| null> |
| icon   | Leaflet icon instance.   | Ref<[Icon](/components/types.html#icon) \| null>     |
