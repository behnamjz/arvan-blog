import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Single from './views/single.vue'
import Home from './views/home.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: Single
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/post/:slug',
      name: 'single',
      component: Single
    }
  ]
})
