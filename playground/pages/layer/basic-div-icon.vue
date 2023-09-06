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
    <VMapMarker :latlng="[0, 0]" @click="increment">
      <VMapDivIcon
        class="marker-round-icon"
        :icon-size="[23, 23]"
        :icon-anchor="[10, 23]"
      >
        {{ counter }}
      </VMapDivIcon>
    </VMapMarker>
  </VMap>
</template>

<style>
.marker-round-icon {
  background-color: black;
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  line-height: 23px;
  text-align: center;
}
</style>
