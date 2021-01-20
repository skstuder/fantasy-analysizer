<template>
  <div class="bg-dark">
    <Nuxt />
  </div>
</template>

<script>
import ogImage from '~/assets/ogImage.png'
export default {
  head() {
    return {
      titleTemplate: 'Pulp Fantasy Handicap Helper',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Enter your handicap/allstar status and see the point potientials for your rider!',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.BASE_URL + ogImage,
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
