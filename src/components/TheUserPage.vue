<template>
  <v-row class="flex-column ma-0">
    <v-row class="flex-row ma-0" style="flex-grow: 6">
      <v-col cols="4" class="d-flex flex-column align-center pa-0">
        <v-img :src="require('@/assets/logo.png')" min-width="90%" :contain="true"/>
        <v-btn
          rounded
          color="primary"
          dark
          class="mt-10"
        >
          Редактировать
        </v-btn>
      </v-col>
      <v-col cols="8" class="pa-0">
        <span>{{user.username}}</span>
      </v-col>
    </v-row>
    <v-row class="flex-column justify-start ma-0" style="flex-grow: 4">
      Status:
      <div>
        {{user.status}}
      </div>
    </v-row>
  </v-row>
</template>

<script>
import mapState from "vuex/dist/vuex.mjs";

export default {
  name: "TheUserPage",
  computed: {
    user() {
      return this.$store.state.user
    },
  }
}
</script>

<style scoped>

</style>
