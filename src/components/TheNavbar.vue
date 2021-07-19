<template>
  <div class="navbar">
    <router-link v-for="route in routes" :key="route.value" :to="route.path" class="link">
      <img class="link__image" v-bind:src="route.url" v-bind:alt="route.value"/>
      <div class="link__text">
        {{route.value}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    id: {
      type: String,
      default: "415yaBazaOtvette"
    }
  },
  data: function () {
    return {
      routes: [
        {path: `/${this.id}`, url: require("@/assets/MeIcon.png"), value: 'Me'},
        {path: `/${this.id}/friends`, url: require("@/assets/FriendsIcon.png"), value: 'Friends'},
        {path: `/${this.id}/messages`, url: require("@/assets/MessageIcon.png"), value: 'Messages'},
        {path: `/${this.id}/news`, url: require("@/assets/NewsIcon.png"), value: 'News'},
        {path: `/logout`, url: require("@/assets/LogoutIcon.png"), value: 'Logout'},
      ],
    }
  }

}
</script>

<style lang="less" scoped>
@import "public/variables";
.navbar {
  position: relative;
  width: 100%;
  height: @headerHeight;
  background-color: green;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.link {
  display: flex;
  justify-content: center;
}

.link__image {
  padding-top: 1px;
  max-height: 30px;
}

.link__text  {
  font-size: 16px;
  position: absolute;
  bottom: 0;
}
</style>
