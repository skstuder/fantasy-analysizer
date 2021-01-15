<template>
  <div>
    <div class="flex flex-row mb-4 mx-auto justify-center items-baseline">
      <label
        class="mr-5 uppercase font-bold text-lg text-grey-darkest"
        for="handicap"
        >Is This Rider an Allstar?</label
      >
      <input
        v-model="isAllStar"
        type="checkbox"
        class="border mt-3 py-2 px-3 text-grey-darkest"
        @click="allStarChanged(!isAllStar)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAllStar: false,
    }
  },
  methods: {
    allStarChanged(isAllStar) {
      this.$emit('allStarChanged', isAllStar)
    },
  },
}
</script>

<style scoped>
input[type='checkbox'] {
  transform: scale(2.5);
}
</style>
