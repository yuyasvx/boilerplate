import Vue from 'vue'
import Router from 'vue-router'
import Home from '../../views/Home.vue'
import About from '../../views/About.vue'
import Modal from '../../views/Modal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main/about',
      name: 'about',
      component: About
    },
    {
      path: '/main/modal',
      name: 'modal',
      component: Modal
    }
  ]
})
