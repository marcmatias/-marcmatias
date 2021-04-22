<template>
  <div class="text-gray-700 dark:text-gray-400 z-10 relative text-sm sm:text-base">
    Postado {{ post.date }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min de leitura.</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>