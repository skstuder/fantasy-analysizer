<template>
  <div class="container bg-dark">
    <div class="w-full rounded shadow-lg p-8 m-4">
      <h1 class="title pb-5">Rider Point Potiental</h1>
      <div>
        <handicap-input class="pb-5" @handicapChanged="updateHandicap" />
        <allstar-checkbox class="pb-5"></allstar-checkbox>
      </div>
      <no-results />
      <results-grid v-if="handicap" />
    </div>
  </div>
</template>

<script>
import HandicapInput from '../components/HandicapInput'
import ResultsGrid from '../components/ResultsGrid'
import AllstarCheckbox from '../components/AllstarCheckbox'
import NoResults from '../components/NoResults'
export default {
  components: { HandicapInput, ResultsGrid, AllstarCheckbox, NoResults },
  data() {
    return {
      handicap: 0,
      allstar: false,
      handicapEntered: false,
    }
  },
  methods: {
    updateHandicap(value) {
      this.handicap = value
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

* {
  background: #3d3d59;
  color: #fefefe;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
.bg-card {
  background: #3d3d59;
}

.title {
  font-family: 'Racing Sans One', cursive;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #fefefe;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #fefefe;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
