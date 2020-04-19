<template>
  <div id="app">
    <HelloWorld msg="Todo's Manager" />
  </div>
</template>

<script>
import HelloWorld from "./components/Home.vue";
import store from "./modules/Store";
export default {
  name: "App",
  store,
  components: {
    HelloWorld,
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
  margin-top: 60px;
}
</style>
