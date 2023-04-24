<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <VMap>
    <VMapLayersControl>
      <VMapOsmTileLayer />
      <VMapMapboxTileLayer
        id="streets-v9"
        title="Mapbox Streets"
        :access-token="runtimeConfig.public.mapboxAccessToken"
      />
      <VMapArcGisTileLayer />
      <VMapArcGisAeroTileLayer />
      <VMapOcmTileLayer :api-key="runtimeConfig.public.ocmApiKey" />
      <VMapGoogleTileLayer title="Google Streets" />
      <VMapGoogleTileLayer title="Google Hybrid" type="hybrid" />
      <VMapGoogleTileLayer title="Google Terrain" type="terrain" />
      <VMapGoogleTileLayer title="Google Satellite" type="satellite" />
    </VMapLayersControl>
  </VMap>
</template>
