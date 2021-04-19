<template>
  <div
    class="hover:-translate-y-1 mx-4 transform duration-500 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl"
  >
    <div>
      <g-image
        alt="Cover image"
        v-if="post.cover_image"
        class="w-full rounded-t"
        :src="post.cover_image"
      />
    </div>
    <div class="px-7 sm:px-14 pb-6 sm:pb-12 pt-4 sm:pt-8">
      <h2 class="text-2xl md:text-4xl font-medium pb-5" v-html="post.title" />
      <p class="text-lg md:text-xl pb-5" v-html="post.description" />

      <PostMeta :post="post" />
      <PostTags :post="post" />

      <g-link
        class="absolute w-full h-full opacity-0 overflow-hidden z-0 top-0 left-0"
        :to="post.path"
        >Link</g-link
      >
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: ["post"],
};
</script>