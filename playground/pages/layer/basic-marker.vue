<template>
  <VMap>
    <VMapOsmTileLayer />
    <VMapZoomControl />
    <VMapAttributionControl />
    <VMapMarker :latlng="[0, 0]" />
  </VMap>
</template>
