export default {
  logo: '/logo.png',
  navbar: [
    { text: 'Guide', link: '/guide/quick-start.md' },
    { text: 'Components', link: '/components/map/map.md' },
    { text: 'Examples', link: '/examples/' },
    { text: 'GitHub', link: 'https://github.com/nikolaynau/vue-map-ui' }
  ],
  sidebar: {
    '/guide/': [
      {
        text: 'Getting Started',
        collapsable: true,
        children: ['/guide/quick-start.md']
      }
    ],
    '/components/': [
      {
        text: 'Components',
        collapsable: false,
        children: [
          {
            text: 'Map',
            children: ['/components/map/map.md']
          },
          {
            text: 'Layer',
            children: ['/components/layer/tile-layer.md']
          },
          {
            text: 'Tile',
            children: ['/components/tile/osm-tile-layer.md']
          }
        ]
      },
      {
        text: 'Types',
        collapsable: false,
        link: '/components/types.md'
      }
    ],
    '/examples/': [
      {
        text: 'Examples',
        collapsable: true,
        children: []
      }
    ]
  }
};
