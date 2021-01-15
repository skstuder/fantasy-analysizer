<template>
  <div class="mb-5">
    <h2 v-if="allstar" class="text-2xl">
      You are viewing points possibilites for a <b>{{ handicap }}</b> handicap
      <b>ALLSTAR</b>
    </h2>
    <h2 v-if="!allstar" class="text-2xl">
      You are viewing points possibilites for a <b>{{ handicap }}</b> handicap
      <b>NON-ALLSTAR</b>
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
