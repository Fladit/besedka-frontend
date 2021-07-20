<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
    >
      <v-container>
        <v-row class="d-flex justify-space-around">
          <v-btn icon @click="$router.push({path: `/${id}`})">
            <v-icon size="36px">account_circle</v-icon>
          </v-btn>
          <v-btn icon @click="$router.push({path: `/${id}/friends`})">
            <v-icon size="48px">groups</v-icon>
          </v-btn>

          <v-btn icon @click="$router.push({path: '/messages'})" class="d-flex flex-column">
            <v-icon size="36px">textsms</v-icon>
          </v-btn>

          <v-btn icon @click="$router.push({path: '/news'})" class="d-flex flex-column">
            <v-icon size="36px">feed</v-icon>
          </v-btn>

          <v-btn icon @click="$router.push({path: '/news'})" class="d-flex flex-column">
            <v-icon size="36px">logout</v-icon>
          </v-btn>
        </v-row>
      </v-container>


    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TheNavbarVuetify",
  data: function () {
    return {
      id: 'zhekster777',
    }
  }
}
</script>

<style scoped>

</style>
