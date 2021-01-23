<template>
  <div class="bg-dark">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: 'Pulp Fantasy Handicap Helper',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Math is hard, use this handicap helper to see the point potiental of your pulp mx fantasy picks!',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Math is hard, use this handicap helper to see the point potiental of your pulp mx fantasy picks!',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Pulpmx Fantasy Handicap Helper',
        },
      ],
    }
  },
}
</script>

<style>
.bg-dark {
  background: #2a2a45;
}
</style>
