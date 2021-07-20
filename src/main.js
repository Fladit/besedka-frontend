import Vue from 'vue'
import App from './App.vue'
import myRouter from "@/utils/myRouter";
import VueRouter from "vue-router";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router: myRouter,
  render: h => h(App),
}).$mount('#app')
