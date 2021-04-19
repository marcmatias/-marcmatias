<template>
  <div class="post-tags space-x-4 my-6 z-10 relative">
    <g-link
      class="bg-gray-100 dark:bg-gray-900 rounded-xl p-2 font-medium text-gray-500 dark:text-gray-300 hover:opacity-60 transition-opacity duration-500"
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
    >
      <span>#</span> {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
