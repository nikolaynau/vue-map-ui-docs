<script setup lang="ts">
type NavItem = {
  title: string;
  url: string;
};

type NavItemGroup = {
  title: string;
  children: Array<NavItem>;
  order: number;
};

const ORDER: Record<string, number> = Object.freeze({
  map: 1,
  layer: 2,
  control: 3,
  tile: 4
});

const list = import.meta.glob('./*/*.vue');
const groups: Record<string, NavItemGroup> = {};
for (const [fileName] of Object.entries(list)) {
  const parts = fileName.split('/');
  const groupKey = parts[parts.length - 2];
  const title = parts[parts.length - 1].slice(0, -4);
  const url = `/${groupKey}/${title}`;

  if (!groups[groupKey]) {
    groups[groupKey] = {
      title: groupKey.slice(0, 1).toUpperCase() + groupKey.slice(1),
      order: ORDER[groupKey],
      children: []
    };
  }

  groups[groupKey].children.push({
    title: toPascalCase(title),
    url
  });
}

const navItems = reactive<NavItemGroup[]>(
  Object.keys(groups).map(k => groups[k])
);

navItems.sort((a, b) => a.order - b.order);
</script>

<template>
  <div class="h-full p-4 overflow-auto">
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
