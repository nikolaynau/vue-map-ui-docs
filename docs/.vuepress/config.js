import { defaultTheme } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';
import themeConfig from './theme-config';

const __dirname = getDirname(import.meta.url);

export default {
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
  ],
  markdown: {
    importCode: {
      handleImportPath: str =>
        str.replace(
          /^@playground/,
          path.resolve(__dirname, '../../playground/pages')
        )
    }
  }
};
