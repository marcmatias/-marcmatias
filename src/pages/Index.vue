<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'marcmatias webpage',
    seo: {
      baseUrl: 'https://marcmatias.github.io',
      title: 'Marcel Marques', // Uses the titleTemplate in Gridsome config
      description: 'Página pessoal e blog do marcmatias',
      keywords: 'opensource, python, javascript, internet',
      image: '~/assets/images/avatar.png',
      openGraph: {
        title: 'Marcel Marques, página pessoal do marcmatias',
        type: 'website'
      },
      twitter: {
        title: 'Marcel Marques, página pessoal do @marcmatias',
        type: 'Página pessoal e blog do usuário @marcmatias'
      },
      link: ['http://marcmatias.github.io'],   // any links
      // script: []  // any scripts
    }
  }
}
</script>
