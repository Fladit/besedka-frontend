<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Login/>
  </div>
</template>

<script>

import Login from "@/components/TheLoginWindow";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
