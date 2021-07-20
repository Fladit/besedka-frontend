<template>
  <div>
    <TheNavbarVuetify/>
    <router-view/>
  </div>
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
