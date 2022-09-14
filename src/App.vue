<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Cbtn />
    <div style="display:flex;justify-content:center">
      <TimeLine />
    </div>
  </div>
</template>

<script>
import Cbtn from './package/c-btn/index.vue'
// import HelloWorld from './components/HelloWorld.vue'
import TimeLine from './package/c-Timeline/timeLine.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Cbtn,
    TimeLine
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
