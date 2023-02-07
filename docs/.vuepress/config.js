const { defaultTheme } = require('vuepress');
const {
  registerComponentsPlugin
} = require('@vuepress/plugin-register-components');
const path = require('path');
const themeConfig = require('./theme-config');

module.exports = {
  base: '/vue3-map-ui-docs/',
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
