<template>
  <div class="container bg-dark">
    <div class="w-full rounded shadow-lg p-8 m-4">
      <h1 class="racing-font mb-3 text-4xl md:text-6xl">
        Rider Point Potiental
      </h1>
      <div>
        <handicap-input class="pb-5" @handicapChanged="updateHandicap" />
        <allstar-checkbox
          class="pb-5"
          @allStarChanged="updateAllStar"
        ></allstar-checkbox>
      </div>
      <transition name="fade">
        <no-results v-if="!handicap" />
      </transition>
      <transition name="fade">
        <info-area v-show="handicap" :allstar="allstar" :handicap="handicap" />
      </transition>
      <transition name="fade">
        <results-grid
          v-show="handicap"
          :allstar="allstar"
          :handicap="handicap"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import HandicapInput from '../components/HandicapInput'
import ResultsGrid from '../components/ResultsGrid'
import AllstarCheckbox from '../components/AllstarCheckbox'
import NoResults from '../components/NoResults'
import InfoArea from '../components/InfoArea'
export default {
  components: {
    HandicapInput,
    ResultsGrid,
    AllstarCheckbox,
    NoResults,
    InfoArea,
  },
  data() {
    return {
      handicap: '',
      allstar: false,
      handicapEntered: false,
    }
  },
  methods: {
    updateHandicap(value) {
      this.handicap = value
    },
    updateAllStar(value) {
      this.allstar = value
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
.racing-font {
  font-family: 'Racing Sans One', cursive;
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
  font-family: 'Racing Sans One', cursive;
  font-weight: 300;
  font-size: 35px;
  color: #fefefe;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
