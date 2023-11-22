# LocateControl

The `VMapLocateControl` component is used to geolocate the user.

::: details Required [@leaflet-extensions/locatecontrol](https://github.com/nikolaynau/leaflet-extensions/tree/master/packages/leaflet-locatecontrol) extension.

Installation

```bash:no-line-numbers
$ npm install @leaflet-extensions/locatecontrol
```

Add

```js
import '@leaflet-extensions/locatecontrol';
import '@leaflet-extensions/locatecontrol/dist/leaflet-locatecontrol.css';
```

For Nuxt

```vue
<script setup lang="ts">
if (process.client) {
  await Promise.all([
    // @ts-ignore
    import('@leaflet-extensions/locatecontrol'),
    import('@leaflet-extensions/locatecontrol/dist/leaflet-locatecontrol.css')
  ]);
}
</script>
```

:::

## Basic usage

<ClientOnly>
  <Demo url="/control/basic-locate-control" >
  
<<< @/../playground/pages/control/basic-locate-control.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

| Name                       | Type                                                                                                                                                                                                                        | Description                                                                                                                      | Default                                                              |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| position                   | The position of the control (one of the corners of the map). See types for possible values.                                                                                                                                 | [ControlPosition](/components/types.html#controlposition) \| [ExtraControlPosition](/components/types.html#extracontrolposition) | 'centerright'                                                        |
| layer                      | The layer that the user's location should be drawn on.                                                                                                                                                                      | [`Layer`](http://leafletjs.com/reference.html#layer)                                                                             | a new layer                                                          |
| setView                    | Set the map view (zoom and pan) to the user's location as it updates. Options are `false`, `'once'`, `'always'`, `'untilPan'`, or `'untilPanOrZoom'`                                                                        | `boolean` \| `string`                                                                                                            | 'untilPanOrZoom'                                                     |
| flyTo                      | Smooth pan and zoom to the location of the marker. Only works in Leaflet 1.0+.                                                                                                                                              | `boolean`                                                                                                                        | false                                                                |
| keepCurrentZoomLevel       | Only pan when setting the view.                                                                                                                                                                                             | `boolean`                                                                                                                        | false                                                                |
| initialZoomLevel           | After activating the plugin by clicking on the icon, zoom to the selected zoom level, even when keepCurrentZoomLevel is true. Set to `false` to disable this feature.                                                       | `false` \| `integer`                                                                                                             | false                                                                |
| clickBehavior              | What to do when the user clicks on the control. Has three options `inView`, `inViewNotFollowing` and `outOfView`. Possible values are `stop` and `setView`, or the name of a behaviour to inherit from.                     | `object`                                                                                                                         | {inView: 'stop', outOfView: 'setView', inViewNotFollowing: 'inView'} |
| returnToPrevBounds         | If set, save the map bounds just before centering to the user's location. When control is disabled, set the view back to the bounds that were saved.                                                                        | `boolean`                                                                                                                        | false                                                                |
| cacheLocation              | Keep a cache of the location after the user deactivates the control. If set to false, the user has to wait until the locate API returns a new location before they see where they are again.                                | `boolean`                                                                                                                        | true                                                                 |
| showCompass                | Show the compass bearing on top of the location marker.                                                                                                                                                                     | `boolean`                                                                                                                        | true                                                                 |
| drawCircle                 | If set, a circle that shows the location accuracy is drawn.                                                                                                                                                                 | `boolean`                                                                                                                        | true                                                                 |
| drawMarker                 | If set, the marker at the users' location is drawn.                                                                                                                                                                         | `boolean`                                                                                                                        | true                                                                 |
| markerClass                | The class to be used to create the marker.                                                                                                                                                                                  | `class`                                                                                                                          | LocationMarker                                                       |
| compassClass               | The class to be used to create the marker.                                                                                                                                                                                  | `class`                                                                                                                          | CompassMarker                                                        |
| circleStyle                | Accuracy circle style properties.                                                                                                                                                                                           | [`PathOptions`](http://leafletjs.com/reference.html#path-options)                                                                | see code                                                             |
| markerStyle                | Inner marker style properties. Only works if your marker class supports `setStyle`.                                                                                                                                         | [`PathOptions`](http://leafletjs.com/reference.html#path-options)                                                                | see code                                                             |
| compassStyle               | Triangle compass heading marker style properties. Only works if your marker class supports `setStyle`.                                                                                                                      | [`PathOptions`](http://leafletjs.com/reference.html#path-options)                                                                | see code                                                             |
| followCircleStyle          | Changes to the accuracy circle while following. Only need to provide changes.                                                                                                                                               | [`PathOptions`](http://leafletjs.com/reference.html#path-options)                                                                | {}                                                                   |
| followMarkerStyle          | Changes to the inner marker while following. Only need to provide changes.                                                                                                                                                  | [`PathOptions`](http://leafletjs.com/reference.html#path-options)                                                                | {}                                                                   |
| followCompassStyle         | Changes to the compass marker while following. Only need to provide changes.                                                                                                                                                | [`PathOptions`](http://leafletjs.com/reference.html#path-options)                                                                | {}                                                                   |
| icon                       | The CSS class for the icon.                                                                                                                                                                                                 | `string`                                                                                                                         | 'leaflet-control-locate-location-arrow'                              |
| iconLoading                | The CSS class for the icon while loading.                                                                                                                                                                                   | `string`                                                                                                                         | 'leaflet-control-locate-spinner'                                     |
| iconElementTag             | The element to be created for icons.                                                                                                                                                                                        | `string`                                                                                                                         | 'span'                                                               |
| circlePadding              | Padding around the accuracy circle.                                                                                                                                                                                         | `array`                                                                                                                          | [0, 0]                                                               |
| createButtonCallback       | This callback can be used in case you would like to override button creation behavior.                                                                                                                                      | `function`                                                                                                                       | see code                                                             |
| getLocationBounds          | This callback can be used to override the viewport tracking behavior.                                                                                                                                                       | `function`                                                                                                                       | see code                                                             |
| onLocationError            | This even is called when the user's location is outside the bounds set on the map.                                                                                                                                          | `function`                                                                                                                       | see code                                                             |
| metric                     | Use metric units.                                                                                                                                                                                                           | `boolean`                                                                                                                        | true                                                                 |
| onLocationOutsideMapBounds | Called when the user's location is outside the bounds set on the map. Called repeatedly when the user's location changes.                                                                                                   | `function`                                                                                                                       | see code                                                             |
| showPopup                  | Display a pop-up when the user click on the inner marker.                                                                                                                                                                   | `boolean`                                                                                                                        | true                                                                 |
| strings                    | Strings used in the control. Options are `title`, `text`, `metersUnit`, `feetUnit`, `popup` and `outsideMapBoundsMsg`                                                                                                       | `object`                                                                                                                         | see code                                                             |
| strings.popup              | The string shown as popup. May contain the placeholders `{distance}` and `{unit}`. If this option is specified as function, it will be executed with a single parameter `{distance, unit}` and expected to return a string. | `string` \| `function`                                                                                                           | see code                                                             |
| locateOptions              | The default options passed to leaflets locate method.                                                                                                                                                                       | [`LocateOptions`](http://leafletjs.com/reference.html#map-locate-options)                                                        | see code                                                             |

### Events

No events.

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name          | Description                      | Type                                                                                 |
| ------------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| locateControl | Leaflet locate control instance. | Ref<[LocateControlExtension](/components/types.html#locatecontrolextension) \| null> |
