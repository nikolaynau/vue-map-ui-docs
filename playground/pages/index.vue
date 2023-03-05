<script setup lang="ts">
type NavItem = {
  title: string;
  url: string;
};
const navItems = reactive<Array<NavItem>>([
  { title: 'Basic Map', url: '/map/basic' }
]);
</script>

<template>
  <div class="p-4">
    <h1 class="font-semibold text-lg">Examples</h1>
    <ul class="p-2">
      <li
        v-for="{ title, url } in navItems"
        :key="`${title}${url}}`"
        class="mb-1"
      >
        <NuxtLink class="underline" :to="url" no-prefetch>{{ title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
