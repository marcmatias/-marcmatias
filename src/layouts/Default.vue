<template>
  <div id="app">
    <header class="flex justify-between items-center p-8 top-0 xl:sticky">
      <div class="flex">
        <Logo v-if="showLogo" />
      </div>
      
      <div class="flex items-center">
        <ToggleTheme :show-search="showSearch" />
      </div>
    </header>
    <main class="max-w-4xl mx-auto bg-local">
      <slot />
    </main>

    <footer class="flex justify-center pb-8 text-lg">
      <span
        >Copyleft <span class="transform rotate-180 inline-block">&copy;</span>
        {{ new Date().getFullYear() }}.&nbsp;
      </span>
      <span
        >Powered by
        <a
          class="underline text-gray-500 hover:opacity-70 transition-opacity duration-300"
          href="//gridsome.org"
        >
          Gridsome
        </a></span
      >
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true },
    showSearch: { default: true },
  },
  components: {
    Logo,
    ToggleTheme,
  },
};
</script>

<style>
a {
  @apply text-purple-700 dark:text-purple-400;
}
a:hover {
  @apply underline opacity-80;
}
</style>