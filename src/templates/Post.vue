<template>
  <Layout>
    <div>
      <div class="text-center">
        <h1 class="text-4xl font-medium pt-8 pb-6">
          {{ $page.post.title }}
        </h1>

        <PostMeta class="pb-8 font-medium" :post="$page.post" />
      </div>

      <div class="bg-white dark:bg-gray-800 rounded">
        <div>
          <g-image
            class="w-full rounded-t"
            alt="Cover image"
            v-if="$page.post.cover_image"
            :src="$page.post.cover_image"
          />
        </div>

        <div class="px-7 sm:px-14 pb-9 pt-4 sm:pt-8">
          <div class="markdown" v-html="$page.post.content" />
          <div class="pt-4">
            <PostTags :post="$page.post" />
          </div>
        </div>
      </div>

      <div>
        <!-- Add comment widgets here -->
      </div>

      <Author class="post-author" />
    </div>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$page.metadata.siteName + " Blog",
        },
        {
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content:
            this.$page.metadata.siteUrl + this.$page.post.cover_image.src,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.description,
        },
        {
          key: "og:title",
          name: "og:title",
          content: this.$page.metadata.siteName + " Blog",
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.post.description,
        },
        {
          key: "og:image",
          name: "og:image",
          content:
            this.$page.metadata.siteUrl + this.$page.post.cover_image.src,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  metadata {
  	siteName
  	siteUrl
  	siteDescription
  }
  post: post (id: $id) {
    title
    path
    date (format: "DD/MM/YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>


<style>
/* Markdown Styles */
.markdown {
  @apply leading-relaxed;
}

.markdown {
  @apply text-lg;
}

/* Headers */
.markdown p:nth-child(2) {
  @apply text-xl py-4;
}
.markdown .token.function {
  @apply text-red-500;
}
.markdown h1 {
  @apply text-xl my-6 font-semibold;
}
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  @apply text-lg my-3 font-semibold;
}

@screen sm {
  .markdown h1 {
    @apply text-2xl;
  }
  .markdown h2,
  .markdown h3,
  .markdown h4,
  .markdown h5,
  .markdown h6 {
    @apply text-xl;
  }
}

/* Paragraph */
.markdown p {
  @apply mb-4;
}
/* Lists */
.markdown ul,
.markdown ol {
  @apply mb-4 ml-5 text-lg;
}
.markdown li > p,
.markdown li > ul,
.markdown li > ol {
  @apply mb-0;
}
.markdown ol {
  @apply list-decimal;
}
.markdown ul {
  @apply list-disc;
}
/* Blockquotes */
.markdown blockquote {
  @apply p-2 mx-6 bg-gray-100 mb-4 border-l-4 border-gray-400 italic;
}
.markdown blockquote > p {
  @apply mb-0;
}
/* Tables */
.markdown td,
.markdown th {
  @apply px-2 py-1 border border-gray-400;
}
.markdown tr:nth-child(odd) {
  @apply bg-gray-100;
}
.markdown table {
  @apply mb-6;
}
.markdown pre {
  @apply py-8 mt-4 mb-6 rounded-md border border-yellow-100 dark:border-gray-700 bg-yellow-50 dark:bg-gray-900 overflow-x-auto;
}
.markdown code {
  @apply p-8 text-base;
}
</style>