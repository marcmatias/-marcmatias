// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

  siteName: 'marcmatias',

  siteDescription: 'Experiências e pensamentos sobre programação',

  siteUrl: 'https://marcmatias.github.io',

  author: 'Marcel Marques',


  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
        ['gridsome-plugin-remark-youtube', { width: '100%', align: 'auto' }]
      ]
    }
  }

}
