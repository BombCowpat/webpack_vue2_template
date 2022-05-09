import Vue from 'vue'
import _ from 'lodash'
import App from './App.vue'
import store from './store'
import router from './router'

console.log(_.chunk([1, 2, 3, 4], 2))

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store,
  router
}).$mount('#app')
