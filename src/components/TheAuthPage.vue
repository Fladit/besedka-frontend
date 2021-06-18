<template>
  <div class="auth">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "TheAuthPage",
}
</script>

<style scoped>
.auth {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
