<script setup lang="ts">
type NavItem = {
  title: string;
  url: string;
};

type NavItemGroup = {
  title: string;
  children: Array<NavItem>;
};

const navItems = reactive<NavItemGroup[]>([
  {
    title: 'Map',
    children: [{ title: 'Basic Map', url: '/map/basic-map' }]
  },
  {
    title: 'Layer',
    children: [{ title: 'Basic Tile Layer', url: '/layer/basic-tile-layer' }]
  },
  {
    title: 'Tile',
    children: [
      { title: 'Basic Osm Tile Layer', url: '/tile/basic-osm-tile-layer' },
      {
        title: 'Basic ArcGis Tile Layer',
        url: '/tile/basic-arc-gis-tile-layer'
      }
    ]
  }
]);
</script>

<template>
  <div class="p-4">
    <h1 class="font-semibold text-lg">Examples</h1>
    <ul class="p-2">
      <li v-for="({ title, children }, i) in navItems" :key="i" class="mb-1">
        <h2 class="font-semibold">{{ title }}</h2>
        <ul class="p-2">
          <li v-for="(item, j) in children" :key="j" class="mb-1">
            <NuxtLink class="underline" :to="item.url" no-prefetch>
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
