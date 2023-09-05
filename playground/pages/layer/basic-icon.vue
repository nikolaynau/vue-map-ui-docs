<template>
  <VMap>
    <VMapOsmTileLayer />
    <VMapZoomControl />
    <VMapAttributionControl />
    <VMapMarker :latlng="[0, 0]">
      <VMapIcon
        icon-url="/custom/marker-icon.png"
        :icon-size="[32, 42]"
        :icon-anchor="[16, 42]"
      />
    </VMapMarker>
  </VMap>
</template>
