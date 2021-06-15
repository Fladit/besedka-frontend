import Vue from 'vue'
import App from './App.vue'
import myRouter from "@/utils/myRouter";
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  router: myRouter,
  render: h => h(App),
}).$mount('#app')
