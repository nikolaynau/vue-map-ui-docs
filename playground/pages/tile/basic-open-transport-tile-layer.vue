<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <VMap>
    <VMapOpenTransportTileLayer
      :api-key="runtimeConfig.public.openTransportApiKey"
    />
  </VMap>
</template>
