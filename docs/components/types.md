# Types

## Map

[Map](https://leafletjs.com/reference.html#map)

## TileLayer

[TileLayer](https://leafletjs.com/reference.html#tilelayer)

## Marker

[Marker](https://leafletjs.com/reference.html#marker)

## Icon

[Icon](https://leafletjs.com/reference.html#icon)

## DivIcon

[DivIcon](https://leafletjs.com/reference.html#divicon)

## Control.Layers

[Control.Layers](https://leafletjs.com/reference.html#control-layers)

## Control.Zoom

[Control.Zoom](https://leafletjs.com/reference.html#control-zoom)

## Control.Attribution

[Control.Attribution](https://leafletjs.com/reference.html#control-attribution)

## Control.Scale

[Control.Scale](https://leafletjs.com/reference.html#control-scale)

## LatLngExpression

[LatLng](https://leafletjs.com/reference.html#latlng) | `{ lat: number; lng: number; }` | `[number, number]`

## LatLngBoundsExpression

[LatLngBounds](https://leafletjs.com/reference.html#latlngbounds) | `[[number, number], [number, number]]`

## PointExpression

[Point](https://leafletjs.com/reference.html#point) | `[number, number]`

## ControlPosition

`'topleft' | 'topright' | 'bottomleft' | 'bottomright'`

## ExtraControlPosition

`'centerleft' | 'centerright' | 'htopleft' | 'htopright' | 'htopcenter' | 'hbottomleft' | 'hbottomright' | 'hbottomcenter'`

## CrossOrigin

`'anonymous' | 'use-credentials' | ''`

## ViewChangedEvent

This event extends the [LeafletEvent](https://leafletjs.com/reference.html#event-property).

| Name   | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| center | [LatLng](https://leafletjs.com/reference.html#latlng)             |
| zoom   | `number`                                                          |
| bounds | [LatLngBounds](https://leafletjs.com/reference.html#latlngbounds) |
