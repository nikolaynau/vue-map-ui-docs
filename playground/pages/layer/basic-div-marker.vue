<script setup lang="ts">
const counter = ref(10);

function increment() {
  counter.value++;
}
</script>

<template>
  <VMap>
    <VMapOsmTileLayer />
    <VMapZoomControl />
    <VMapAttributionControl />
    <VMapDivMarker
      :latlng="[0, 0]"
      icon-class="div-marker-round-icon"
      :icon-size="[23, 23]"
      :icon-anchor="[10, 23]"
      @click="increment"
    >
      {{ counter }}
    </VMapDivMarker>
  </VMap>
</template>

<style>
.div-marker-round-icon {
  background-color: black;
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  line-height: 23px;
  text-align: center;
}
</style>
