<template>
  <VMap :attribution-control="false">
    <VMapOsmTileLayer attribution="Open Street Map" />
    <VMapAttributionControl prefix="Leaflet" :attributions="['A', 'B']" />
  </VMap>
</template>
