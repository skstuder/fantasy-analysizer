<template>
  <div
    class="flex flex-col sm:flex-row justify-center items-center h-32 sm:h-16 bg-dark"
  >
    <nuxt-link class="brand" to="/">Handicap Helper</nuxt-link>
    <span class="mx-5 invisible sm:visible bg-dark">|</span>
    <nuxt-link class="bg-red-600 px-2 py-1 rounded font-bold" to="RiderLookup"
      >Past Results By Rider Lookup</nuxt-link
    >
  </div>
</template>

<style scoped>
.brand {
  font-weight: 700;
  font-size: 1.5em;
  text-decoration: none;
}
.nav {
  height: 60px;
}
.nav-mobile {
  height: 100px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
