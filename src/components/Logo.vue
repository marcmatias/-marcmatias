<template>
  <g-link class="text-xl hover:opacity-70 transition-opacity duration-300" to="/">
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