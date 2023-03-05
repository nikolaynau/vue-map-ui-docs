const ALLOW_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://github.com',
  'https://nikolaynau.github.io'
];

export function useParentTheme() {
  function onReceiveMessage(e: MessageEvent) {
    if (ALLOW_ORIGINS.includes(e.origin)) {
      document.documentElement.style.setProperty('--c-bg', e.data?.cBg);
      document.documentElement.style.setProperty('--c-text', e.data?.cText);
    }
  }

  window.addEventListener('message', onReceiveMessage, false);
  window.parent?.postMessage('playground:ready', '*');

  onUnmounted(() => {
    window.removeEventListener('message', onReceiveMessage, false);
  });
}
