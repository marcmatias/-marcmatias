<template>
  <g-link
    class="text-lg sm:pl-6 hover:opacity-70 focus:text-purple-700 transition-opacity duration-300"
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