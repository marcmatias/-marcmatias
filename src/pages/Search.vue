<template>
  <Layout :show-logo="true" :show-search="false">
    <h1 class="text-center">Pesquisa</h1>
    <div class="author">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquisar..."
        v-model="search"
      />
    </div>

    <!-- List posts -->
    <div class="posts">
      <div v-if="searchResults.length > 0">
        <PostCard
          v-for="result in searchResults"
          :key="result.node.id"
          :post="result.node"
        />
      </div>
      <div id="message" class="text-center" v-else-if="search">
        <p>Nenhuma postagem encontrada!</p>
      </div>
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
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: {
    title: "Search",
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    searchResults() {
      return this.$page.posts.edges.filter((post) => {
        return post.node.title
          .toLowerCase()
          .includes(this.search.toLowerCase().trim());
      });
    },
  },
};
</script>

<style lang="scss">
#message {
  padding: 60px 0;
  font-size: 25px;
}
</style>