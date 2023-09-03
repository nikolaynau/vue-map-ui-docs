import { normalizeUrl } from './url';

export function getBaseUrl(): string {
  return import.meta.env.MODE === 'development'
    ? `http://localhost:3000/playground/`
    : `/playground/`;
}

export function getUrl(baseUrl?: string, urlPath?: string): string {
  return `${baseUrl ?? getBaseUrl()}${normalizeUrl(urlPath ?? '')}`;
}

export function getGitHubUrl(urlPath?: string): string {
  return `https://github.com/nikolaynau/vuemap.org/tree/master/playground/pages/${normalizeUrl(
    urlPath ?? ''
  )}.vue`;
}
