<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Login/>
    <TheRegistrationWindow/>
  </div>
</template>

<script>

import Login from "@/components/TheLoginWindow";
import TheRegistrationWindow from "@/components/TheRegistrationWindow";

export default {
  name: 'App',
  components: {
    TheRegistrationWindow,
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
