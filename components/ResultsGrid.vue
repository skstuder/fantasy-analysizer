<template>
  <div>
    <div>
      <h1>A rider with a handicap 15 will score points as follows</h1>
    </div>
    <div class="flex justify-center">
      <table class="flex flex-col sm:flex-row shadow-lg w-100 md:space-x-5">
        <div>
          <tr>
            <th class="bg-red-600 border text-left px-8 py-4">Position</th>
            <th class="bg-red-600 border text-left px-8 py-4">
              Points You Get
            </th>
          </tr>
          <tr v-for="(points, position, index) in positions" :key="position">
            <td v-if="index < 11" class="racing-font border px-8 py-4">
              {{ position }}
            </td>
            <td v-if="index < 11" class="border px-8 py-4">{{ points }}</td>
          </tr>
        </div>
        <div>
          <tr class="collapse h-auto w-100 sm:table-row">
            <th class="bg-red-600 border text-left px-8 py-4">Position</th>
            <th class="bg-red-600 border text-left px-8 py-4">
              Points You Get
            </th>
          </tr>
          <tr v-for="(points, position, index) in positions" :key="position">
            <td v-if="index > 10" class="racing-font border px-8 py-4">
              {{ position }}
            </td>
            <td v-if="index > 10" class="border px-8 py-4">{{ points }}</td>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positions: {
        '1st': 26,
        '2nd': 23,
        '3rd': 21,
        '4th': 19,
        '5th': 18,
        '6th': 17,
        '7th': 16,
        '8th': 15,
        '9th': 14,
        '10th': 13,
        '11th': 12,
        '12th': 11,
        '13th': 10,
        '14th': 9,
        '15th': 8,
        '16th': 7,
        '17th': 6,
        '18th': 5,
        '19th': 4,
        '20th': 3,
        '21st': 2,
        '22nd': 1,
      },
    }
  },
  methods: {
    definePositions() {},
  },
}
</script>

<style scoped>
.racing-font {
  font-family: 'Racing Sans One', cursive;
  font-size: 20px;
}
</style>
