<template>
  <div class="auth">
    <TheNavbar/>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
name: "TheAuthPage",
  components: {TheNavbar}
}
</script>

<style scoped>

</style>
