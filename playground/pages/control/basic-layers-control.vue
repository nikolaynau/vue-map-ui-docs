<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <VMap>
    <VMapLayersControl>
      <VMapOsmTileLayer />
      <VMapZoomControl />
      <VMapMapboxTileLayer
        id="streets-v9"
        title="Mapbox Streets"
        :access-token="runtimeConfig.public.mapboxAccessToken"
      />
      <VMapArcGisTileLayer />
      <VMapArcGisAeroTileLayer />
      <VMapOpenTransportTileLayer
        :api-key="runtimeConfig.public.openTransportApiKey"
      />
      <VMapGoogleTileLayer title="Google Streets" />
      <VMapGoogleTileLayer title="Google Hybrid" type="hybrid" />
      <VMapGoogleTileLayer title="Google Terrain" type="terrain" />
      <VMapGoogleTileLayer title="Google Satellite" type="satellite" />
    </VMapLayersControl>
  </VMap>
</template>
