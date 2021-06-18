<template>
  <div class="navbar">
    <ul class="navbar__list">
      <li class="navbar__link" v-for="route of routes" :key="route.title" >
        <router-link :to="{name: route.name}" >{{route.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    routes: Array,
  }

}
</script>

<style lang="less" scoped>
@import "public/variables";
.navbar {
  width: 100%;
  height: @headerHeight;
  background-color: green;
  position: absolute;
  top: 0;
}
</style>
