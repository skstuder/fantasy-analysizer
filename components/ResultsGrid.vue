<template>
  <div>
    <div class="flex justify-center">
      <table class="flex flex-col sm:flex-row shadow-lg w-100 md:space-x-5">
        <div>
          <thead>
            <tr>
              <th class="bg-red-600 border text-left px-8 py-4">Position</th>
              <th class="bg-red-600 border text-left px-8 py-4">
                Points You Get
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(points, position, index) in convertedPositions"
              :key="position"
            >
              <td v-if="index < 11" class="racing-font border px-8 py-4">
                {{ position }}
              </td>
              <td v-if="index < 11" class="border px-8 py-4 racing-font">
                {{ points }}pts
              </td>
            </tr>
          </tbody>
        </div>
        <div>
          <thead>
            <tr class="hidden h-auto w-100 sm:table-row">
              <th class="bg-red-600 border text-left px-8 py-4">Position</th>
              <th class="bg-red-600 border text-left px-8 py-4">
                Points You Get
              </th>
            </tr>
            <tr class="table-row sm:hidden h-0">
              <th class="w-100 h-0" style="width: 126px"></th>
              <th class="w-100 h-0" style="width: 175px"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(points, position, index) in convertedPositions"
              :key="position"
            >
              <td v-if="index > 10" class="racing-font border px-8 py-4">
                {{ position }}
              </td>
              <td v-if="index > 10" class="border px-8 py-4 racing-font">
                {{ points }}pts
              </td>
            </tr>
          </tbody>
        </div>
      </table>
    </div>
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
    },
  },
  data() {
    return {
      convertedPositions: {},
      positions: {
        1: 26,
        2: 23,
        3: 21,
        4: 19,
        5: 18,
        6: 17,
        7: 16,
        8: 15,
        9: 14,
        10: 13,
        11: 12,
        12: 11,
        13: 10,
        14: 9,
        15: 8,
        16: 7,
        17: 6,
        18: 5,
        19: 4,
        20: 3,
        21: 2,
        22: 1,
      },
    }
  },
  watch: {
    handicap() {
      this.calculatePoints()
    },
    allstar() {
      this.calculatePoints()
    },
  },
  methods: {
    calculatePoints() {
      if (this.handicap) {
        this.convertedPositions = Object.assign({}, this.positions)
        let i = 0
        for (const value in this.convertedPositions) {
          i++

          if (i - parseInt(this.handicap) < 1 && !this.allstar) {
            this.convertedPositions[value] = 26 * 2
          } else if (i - parseInt(this.handicap) < 1 && this.allstar) {
            this.convertedPositions[value] = 26
          } else {
            for (const key in this.positions) {
              if (i - parseInt(this.handicap) === parseInt(key)) {
                this.convertedPositions[value] = this.positions[key]
                if (!this.allstar && i - parseInt(this.handicap) < 11) {
                  this.convertedPositions[value] =
                    this.convertedPositions[value] * 2
                }
              }
            }
          }
        }
        // Come up with logic that like loops through the object and maps on new values
      }
    },
  },
}
</script>

<style scoped>
.racing-font {
  font-family: 'Racing Sans One', cursive;
  font-size: 20px;
}
</style>
