// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import '~/assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push(
    {
      key: 'google-site-verification',
      name: 'google-site-verification',
      content: `KIp4HBhrWREKmS7lQaS44Jd1nBIetiwlqAoSx2DVdJM`,
    },
    {
      key: 'og:site_name',
      name: 'og:site_name',
      content: `marcmatias`,
    },
    {
      key: 'og:title',
      name: 'og:title',
      content: `marcmatias webpage`,
    },
    {
      key: 'og:description',
      name: 'og:description',
      content: `Experiências e pensamentos sobre programação`,
    },
    {
      key: 'og:image',
      name: 'og:image',
      content: `https://marcmatias.github.io/marcavatar.jpg`,
    }
  )

  head.meta.push(
    {
      key: 'twitter:title',
      name: 'twitter:title',
      content: 'marcmatias',
    },
    {
      key: 'twitter:creator',
      name: 'twitter:creator',
      content: '@marcmatias',
    },
    {
      key: 'twitter:description',
      name: 'twitter:description',
      content: `Experiências e pensamentos sobre programação`,
    },
    {
      key: 'twitter:card',
      name: 'twitter:card',
      content: `summary_large_image`,
    },
    {
      key: 'twitter:image',
      name: 'twitter:image',
      content: `https://marcmatias.github.io/marcavatar.jpg`,
    }
  )

}
