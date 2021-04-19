<template>
  <div id="app">
    <header
      class="flex justify-between items-center p-8 bg-transparent top-0 z-10 xl:sticky"
    >
      <div class="flex items-center">
        <Logo v-if="showLogo" />
      </div>

      <div class="flex items-center">
        <ToggleTheme :show-search="showSearch" />
      </div>
    </header>

    <main class="max-w-4xl mx-auto">
      <slot />
    </main>

    <footer class="flex justify-center p-8 text-lg">
      <span
        >Copyleft <span class="transform rotate-180 inline-block">&copy;</span>
        {{ new Date().getFullYear() }}.
      </span>
      <span
        >Powered by
        <a
          class="underline hover:opacity-50 transition-opacity duration-300"
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