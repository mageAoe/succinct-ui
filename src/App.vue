<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Cbtn /> -->
    <!-- <div style="display:flex;justify-content:center">
      <TimeLine />
    </div> -->
    <simpleCard></simpleCard>
  </div>
</template>

<script>
// import Cbtn from './package/c-btn/index.vue'
// import TimeLine from './package/c-Timeline/timeLine.vue'
import simpleCard from "./package/c-simple-card/simpleCard.vue";
export default {
  name: "App",
  components: {
    simpleCard,
    // Cbtn,
    // TimeLine
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
