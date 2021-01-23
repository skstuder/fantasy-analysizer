<template>
  <div class="container bg-dark">
    <div class="w-full rounded shadow-lg p-8 m-4">
      <h1 class="racing-font mb-3 text-3xl md:text-6xl">Titties</h1>
      <transition name="fade">
        <!-- results grid -->
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      riderSelected: '',
    }
  },
  methods: {},
}
</script>

<style>
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
