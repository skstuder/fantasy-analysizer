<template>
  <div class="bg-dark">
    <Nuxt />
  </div>
</template>

<script>
import ogImage from '../assets/ogImage.png'
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
          content: ogImage,
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
