<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
</script>

<template>
  <VMap>
    <VMapOsmTileLayer />
    <VMapZoomControl />
    <VMapAttributionControl />
    <VMapIconMarker
      :latlng="[0, 0]"
      :icon-url="`${baseUrl}custom/marker-icon.png`"
      :icon-size="[32, 42]"
      :icon-anchor="[16, 42]"
    />
  </VMap>
</template>
