<script setup lang="ts">
import L from 'leaflet';

const runtimeConfig = useRuntimeConfig();
L.Icon.Default.imagePath = runtimeConfig.public.baseURL;
</script>

<template>
  <VMap>
    <VMapOsmTileLayer />
    <VMapZoomControl />
    <VMapAttributionControl />
    <VMapPane name="custom-pane" :z-index="601" />
    <VMapMarker pane="custom-pane" :latlng="[0, 0]" />
  </VMap>
</template>
