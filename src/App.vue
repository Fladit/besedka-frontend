<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapActions(['authentication'])
  },
  mounted() {
    this.authentication()
  }
}
</script>

<style>

</style>
