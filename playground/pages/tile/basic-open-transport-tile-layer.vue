<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <VMap>
    <VMapOcmTileLayer :api-key="runtimeConfig.public.ocmApiKey" />
  </VMap>
</template>
