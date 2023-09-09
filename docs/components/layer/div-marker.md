# DivMarker

The `VMapDivMarker` component is used to represent [marker](/components/layer/marker) and [div icon](/components/layer/div-icon) in one component.

## Basic usage

<ClientOnly>
  <Demo url="/layer/basic-div-marker" >
  
<<< @/../playground/pages/layer/basic-div-marker.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use marker options from leaflet [documentation](https://leafletjs.com/reference.html#marker).

| Name                | Description                                                                                                                                                                                                                                                                                                                                          | Type                                                                | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| \* latlng / v-model | Position of the marker as a geographic point on the map. If you pass `null` then the marker will not be created until the value appears. **Required**                                                                                                                                                                                                | [LatLngExpression](/components/types.html#latlngexpression) \| null | —       |
| iconHtml            | Custom HTML code to put inside the div element, empty by default. Alternatively, an instance of HTMLElement.                                                                                                                                                                                                                                         | `string \| HTMLElement \| false`                                    | —       |
| iconBgPos           | Optional relative position of the background, in pixels.                                                                                                                                                                                                                                                                                             | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconSize            | Size of the icon div in pixels.                                                                                                                                                                                                                                                                                                                      | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconAnchor          | The coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical position. Centered by default if size is specified, also can be set in CSS with negative margins.                                                                                            | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconCrossOrigin     | Whether the crossOrigin attribute will be added to the tiles. If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data. Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) for valid String values. | [CrossOrigin](/components/types.html#crossorigin) \| boolean        | —       |
| iconPopupAnchor     | The coordinates of the point from which popups will "open", relative to the icon anchor.                                                                                                                                                                                                                                                             | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconTooltipAnchor   | The coordinates of the point from which tooltips will "open", relative to the icon anchor.                                                                                                                                                                                                                                                           | [PointExpression](/components/types.html#pointexpression)           | —       |
| iconRenderMode      | Rendering mode of the content passed in the default slot. Values: `html`, `node`, `portal`, `none`.                                                                                                                                                                                                                                                  | `string`                                                            | 'html'  |
| iconRootClass       | Root element css class in `node` and `portal` rendering mode. You can pass the same value as in the vue `class` property.                                                                                                                                                                                                                            | `any`                                                               | —       |
| iconKnownClasses    | Here you can specify a list of classes that the leaflet library adds. This is necessary for the properties `className` and `class` to work correctly. By default, the list of internal classes of the leaflet library is used.                                                                                                                       | `string[]`                                                          | —       |
| iconClassName       | A custom class name to assign to both icon and shadow images. Empty by default. The value of this property is combined with and is equivalent to the `class` property.                                                                                                                                                                               | `any`                                                               | —       |
| iconClass           | The CSS class value. You can pass the `object`, `array` and `string` value.                                                                                                                                                                                                                                                                          | `any`                                                               | —       |

### Events

Use marker events from leaflet [documentation](https://leafletjs.com/reference.html#marker-event).

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name   | Description                | Type                                                 |
| ------ | -------------------------- | ---------------------------------------------------- |
| marker | Leaflet marker instance.   | Ref<[Marker](/components/types.html#marker) \| null> |
| icon   | Leaflet div icon instance. | Ref<[Icon](/components/types.html#icon) \| null>     |
