import Vue from 'vue'
import App from './About.vue'
import router from './Router'
// import store from '../../store'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
