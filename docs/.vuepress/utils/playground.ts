import { normalizeUrl } from './url';

export function getBaseUrl(): string {
  return import.meta.env.MODE === 'development'
    ? `http://localhost:3000${import.meta.env.BASE_URL}playground/`
    : `${import.meta.env.BASE_URL}playground/`;
}

export function getUrl(baseUrl?: string, urlPath?: string): string {
  return `${baseUrl ?? getBaseUrl()}${normalizeUrl(urlPath ?? '')}`;
}

export function getGitHubUrl(urlPath?: string): string {
  return `https://github.com/nikolaynau/vue-map-ui-docs/tree/master/playground/pages/${normalizeUrl(
    urlPath ?? ''
  )}.vue`;
}
