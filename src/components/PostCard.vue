<template>
  <div
    class="mx-4 pt-64 sm:pt-96 transform duration-500 text-gray-800 dark:text-white rounded-xl hover:shadow-xl transition-shadow shadow bg-no-repeat bg-cover bg-center overflow-hidden"
    :style="`backgroundImage: url(${post.cover_image.src})`"
  >
    <div
      class="px-7 sm:px-14 pb-20 sm:pb-24 pt-4 sm:pt-8 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-filter backdrop-blur-md"
    >
      <h2 class="text-2xl md:text-4xl font-medium pb-5" v-html="post.title" />
      <p class="text-lg md:text-xl pb-3" v-html="post.description" />
        <PostMeta :post="post" />
    </div>
    <div class="absolute bottom-2 sm:bottom-6 left-6 sm:left-14 z-10">
      <PostTags :post="post" />
    </div>
    <g-link
      class="absolute w-full h-full overflow-hidden z-0 top-0 left-0 opacity-0 dark:hover:bg-purple-500 dark:hover:bg-opacity-20 duration-500"
      :to="post.path"
    />

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