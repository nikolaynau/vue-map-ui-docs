<script setup lang="ts">
const zoomPosition: any = 'top2left2';
</script>

<template>
  <VMap>
    <VMapControlPosition :position="['top2', 'left2']" />
    <VMapOsmTileLayer />
    <VMapZoomControl :position="zoomPosition" />
    <VMapAttributionControl />
  </VMap>
</template>

<style>
.leaflet-top2 {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
}
.leaflet-left2 {
  left: 0;
}
.leaflet-top2 {
  top: 0;
}
.leaflet-left2 .leaflet-control {
  margin-left: 1rem;
}
.leaflet-top2 .leaflet-control {
  margin-top: 1rem;
}
</style>
