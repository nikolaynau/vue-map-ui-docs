# Types

## Map

[Map](https://leafletjs.com/reference.html#map)

## TileLayer

[TileLayer](https://leafletjs.com/reference.html#tilelayer)

## LatLngExpression

[LatLng](https://leafletjs.com/reference.html#latlng) | `{ lat: number; lng: number; }` | `[number, number]`

## LatLngBoundsExpression

[LatLngBounds](https://leafletjs.com/reference.html#latlngbounds) | `[[number, number], [number, number]]`

## ViewChangedEvent

This event extends the [LeafletEvent](https://leafletjs.com/reference.html#event-property).

| Name   | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| center | [LatLng](https://leafletjs.com/reference.html#latlng)             |
| zoom   | `number`                                                          |
| bounds | [LatLngBounds](https://leafletjs.com/reference.html#latlngbounds) |
