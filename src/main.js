import Vue from 'vue'
import App from './App.vue'
import myRouter from "@/plugins/myRouter";
import VueRouter from "vue-router";
import vuetify from "@/plugins/vuetify";
import store from "@/plugins/Store/store";

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  store,
  router: myRouter,
  render: h => h(App),
}).$mount('#app')
