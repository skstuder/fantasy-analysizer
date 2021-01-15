<template>
  <div class="mb-5">
    <h2 v-if="allstar" class="text-2xl">
      You are viewing points possibilites for a
      <b class="stroke text-3xl">{{ handicap }}</b> handicap
      <b class="stroke text-3xl">ALLSTAR</b>
    </h2>
    <h2 v-if="!allstar" class="text-2xl">
      You are viewing points possibilites for a
      <b class="stroke text-3xl">{{ handicap }}</b> handicap
      <b class="stroke text-3xl">NON-ALLSTAR</b>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    handicap: {
      type: String,
      default: '',
    },
    allstar: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.stroke {
  font-family: 'Racing Sans One', cursive;
}
</style>
