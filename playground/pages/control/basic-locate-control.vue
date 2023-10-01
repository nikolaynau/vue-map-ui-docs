<script setup lang="ts">
if (process.client) {
  await Promise.all([
    // @ts-ignore
    import('@leaflet-extensions/locatecontrol'),
    import('@leaflet-extensions/locatecontrol/dist/leaflet-locatecontrol.css')
  ]);
}
</script>

<template>
  <VMap>
    <VMapOsmTileLayer />
    <VMapZoomControl />
    <VMapLocateControl />
    <VMapAttributionControl />
  </VMap>
</template>
