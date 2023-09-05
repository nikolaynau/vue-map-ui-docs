<template>
  <VMap>
    <VMapOsmTileLayer attribution="Open Street Map" />
    <VMapZoomControl />
    <VMapAttributionControl prefix="Leaflet" :attributions="['A', 'B']" />
  </VMap>
</template>
