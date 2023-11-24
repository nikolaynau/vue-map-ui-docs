import { Control } from 'leaflet';

export default defineNuxtPlugin(() => {
  Control.Attribution.prototype.options.prefix =
    '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>';
});
