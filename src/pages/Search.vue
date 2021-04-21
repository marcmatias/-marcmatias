<template>
  <Layout :show-logo="true" :show-search="false">
    <h1 class="text-4xl font-medium text-center">Pesquisa</h1>
    <div class="p-12 text-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquisar..."
        class="dark:text-gray-800 outline-none focus:border-purple-600 border-2 focus:shadow-xl transition-all delay-300 shadow-md p-4 rounded-lg w-72 lg:w-96"
        v-model="search"
      />
    </div>

    <!-- List posts -->
    <div>
      <div class="space-y-9 mb-10" v-if="searchResults.length > 0">
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
        date (format: "DD/MM/YYYY")
        timeToRead
        description
        cover_image
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