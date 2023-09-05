import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vue Map',
  description: 'UI Framework for Vue.js',

  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' }
    ]
  ],

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
      '/components/': sidebarComponents()
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
      text: 'General',
      items: [
        {
          text: 'Map',
          link: '/components/general/map'
        },
        {
          text: 'Pane',
          link: '/components/general/pane'
        }
      ]
    },
    {
      text: 'Layer',
      items: [
        {
          text: 'Marker',
          link: '/components/layer/marker'
        },
        {
          text: 'Icon',
          link: '/components/layer/icon'
        },
        {
          text: 'Tile Layer',
          link: '/components/layer/tile-layer'
        }
      ]
    },
    {
      text: 'Control',
      items: [
        {
          text: 'Zoom Control',
          link: '/components/control/zoom-control'
        },
        {
          text: 'Layers Control',
          link: '/components/control/layers-control'
        },
        {
          text: 'Scale Control',
          link: '/components/control/scale-control'
        },
        {
          text: 'Attribution Control',
          link: '/components/control/attribution-control'
        },
        {
          text: 'Control Position',
          link: '/components/control/control-position'
        }
      ]
    },
    {
      text: 'Tile',
      items: [
        {
          text: 'Open Street Map',
          link: '/components/tile/osm-tile-layer'
        },
        {
          text: 'Arc Gis',
          link: '/components/tile/arc-gis-tile-layer'
        },
        {
          text: 'Arc Gis Aero',
          link: '/components/tile/arc-gis-aero-tile-layer'
        },
        {
          text: 'Mapbox',
          link: '/components/tile/mapbox-tile-layer'
        },
        {
          text: 'Google',
          link: '/components/tile/google-tile-layer'
        },
        {
          text: 'Open Transport',
          link: '/components/tile/open-transport-tile-layer'
        }
      ]
    }
  ];
}
