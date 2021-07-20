<template>
  <div class="auth">
    <router-view/>
    <img class="auth__besedka-icon" src="../assets/BesedkaIcon.png"/>
  </div>
</template>

<script>
export default {
  name: "TheAuthPage",
}
</script>

<style scoped>
.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth__besedka-icon {
  position: absolute;
  width: 200px;
  height: 200px;
  right: 0;
  top: 0;
}
</style>
