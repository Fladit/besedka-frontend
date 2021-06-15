<template>
  <div class="auth__navbar">
  </div>
</template>

<script>
export default {
name: "TheNavbar"
}
</script>

<style lang="less" scoped>
@import "public/variables.less";
.auth__navbar {
  width: 100%;
  height: @headerHeight;
  background-color: green;
  position: absolute;
  top: 0;
}
</style>
