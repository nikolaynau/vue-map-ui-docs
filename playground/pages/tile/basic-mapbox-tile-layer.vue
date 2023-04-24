<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <VMap>
    <VMapMapboxTileLayer
      id="streets-v9"
      :access-token="runtimeConfig.public.mapboxAccessToken"
    />
  </VMap>
</template>
