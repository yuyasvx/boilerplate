import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './About.vue'
import router from './Router'
// import store from '../../store'

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
