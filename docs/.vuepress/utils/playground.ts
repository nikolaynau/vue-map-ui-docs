import { normalizeUrl } from './url';

export function getBaseUrl(): string {
  return import.meta.env.MODE === 'development'
    ? `http://localhost:3000${import.meta.env.BASE_URL}playground/`
    : `${import.meta.env.BASE_URL}playground/`;
}

export function getUrl(baseUrl?: string, urlPath?: string): string {
  return `${baseUrl ?? getBaseUrl()}${normalizeUrl(urlPath ?? '')}`;
}
