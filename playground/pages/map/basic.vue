<script setup lang="ts">
import type { LatLng, LatLngBounds, LatLngTuple } from 'leaflet';
import type { ViewChangedEvent } from 'vue-use-leaflet';

const center = ref<LatLngTuple | LatLng>([0, 0]);
const zoom = ref(0);
const bounds = ref<LatLngBounds | null>(null);

function onViewChanged(e: ViewChangedEvent) {
  center.value = e.center;
  zoom.value = e.zoom;
  bounds.value = e.bounds;
}
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex-grow min-h-0">
      <VMap :center="center" :zoom="zoom" @view-changed="onViewChanged">
        <VMapOsmTileLayer />
      </VMap>
    </div>
    <div class="px-1 pt-2 flex-shrink-0 text-sm overflow-hidden">
      center: {{ center }}, zoom: {{ zoom }}, bounds: {{ bounds }}
    </div>
  </div>
</template>
