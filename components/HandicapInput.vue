<template>
  <div>
    <div class="flex flex-col mb-4 mx-auto justify-baseline items-center">
      <div class="flex flex-row items-baseline items-center">
        <label
          class="mr-2 uppercase font-bold text-lg text-grey-darkest"
          for="handicap"
          >Enter handicap between -2 and 16</label
        >
        <input
          id="handicapInput"
          v-model.trim="$v.text.$model"
          class="border py-2 px-3 text-grey-darkest"
          type="text"
          :class="{
            'is-invalid': $v.text.error,
            'is-valid': !$v.text.$invalid,
          }"
          @keyup="handicapChanged($v.text.$model)"
        />
      </div>
      <div>
        <div class="invalid-feedback">
          <span v-if="!$v.text.required" class="text-red-400"
            >Handicap is required</span
          >
          <span v-if="!$v.text.between" class="text-red-400"
            >Handicap must be within the range of -2 and 16</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, between } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      text: '',
    }
  },
  validations: {
    text: {
      required,
      between: between(-2, 16),
    },
  },
  methods: {
    handicapChanged(text) {
      if (!this.$v.$invalid) {
        this.$emit('handicapChanged', text)
      }
      if (this.$v.$invalid) {
        this.$emit('handicapChanged', '')
      }
    },
  },
}
</script>

<style scoped>
input {
  width: 50px;
  height: 30%;
  background: white;
  border: gray;
  border-style: solid;
  border-width: 3px;
  border-radius: 5px;
  font-weight: bold;
  color: #222;
}
</style>
>
