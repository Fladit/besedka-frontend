<template>
  <div>
    <TheNavbar/>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
name: "TheUser",
  components: {TheNavbar}
}
</script>
<style scoped>

</style>
