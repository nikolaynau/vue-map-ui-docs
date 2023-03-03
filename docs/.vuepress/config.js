import { defaultTheme } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import path from 'path';
import themeConfig from './theme-config';

export default {
  base: '/vue-map-ui-docs/',
  title: 'Vue Map UI',
  description: 'Documentations, API, and FAQ for Vue 3 Map UI',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  theme: defaultTheme(themeConfig),
  plugins: [
    [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components')
      })
    ]
  ]
};
