<template>
  <v-row class="flex-column ma-0">
    <TheNavbarVuetify/>
    <v-row class="mx-0 mb-0" style="margin-top: 50px; height: calc(100vh - 50px)">
      <router-view/>
    </v-row>
  </v-row>
</template>

<script>
import TheNavbarVuetify from "@/components/TheNavbarVuetify";
export default {
name: "TheUser",
  components: {TheNavbarVuetify}
}
</script>
<style scoped>

</style>
