<template>
  <Layout>
    <h1 class="text-4xl font-medium pb-12 text-center"># {{ $page.tag.title }}</h1>

    <div class="space-y-9 mb-10">
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "DD/MM/YYYY")
            timeToRead
            description
            content
            cover_image
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: {
    title: "Tags",
  },
};
</script>
