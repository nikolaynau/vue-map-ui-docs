export function normalizeUrl(url: string) {
  if (url.startsWith('/')) {
    return url.slice(1);
  }
  return url;
}
