<template>
  <g-link
    class="text-lg sm:pl-6 hover:opacity-70 hover:no-underline focus:text-purple-700 dark:text-gray-200 text-gray-700 transition-opacity duration-300"
    to="/"
  >
    <span> &larr; home </span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>