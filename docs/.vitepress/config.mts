import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vue Map',
  description: 'UI Framework for Vue.js',

  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],

  lang: 'en-US',
  lastUpdated: true,

  markdown: { attrs: { disable: true } },

  themeConfig: {
    logo: '/vue-map-logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nikolaynau/vue-map-ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT Nikolay Naumenkov'
    },

    search: {
      provider: 'local'
    },

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarComponents()
    }
  }
});

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/'
    },
    {
      text: 'Components',
      link: '/components/general/map'
    }
  ];
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        {
          text: 'Getting Started',
          link: '/guide/'
        }
      ]
    },
    {
      text: 'Advanced',
      collapsible: true,
      items: [
        {
          text: 'Auto Import',
          link: '/guide/advanced/auto-import'
        },
        {
          text: 'Volar Support',
          link: '/guide/advanced/volar'
        },
        {
          text: 'TypeScript Support',
          link: '/guide/advanced/typescript'
        },
        {
          text: 'Nuxt Module',
          link: '/guide/advanced/nuxt'
        }
      ]
    }
  ];
}

function sidebarComponents() {
  return [
    {
      text: 'Components',
      items: [
        {
          text: 'General',
          items: [
            {
              text: 'Map',
              link: '/components/general/map'
            }
          ]
        }
      ]
    }
  ];
}
