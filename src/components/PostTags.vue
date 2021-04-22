<template>
  <div class="space-x-2 my-6 relative">
    <g-link
      class="bg-gray-50 dark:bg-gray-900 shadow hover:shadow-xl hover:opacity-100 transition-all duration-500 rounded-xl p-2 hover:no-underline font-medium text-gray-600 dark:text-gray-300 dark:hover:bg-purple-900 dark:hover:bg-opacity-70"
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
