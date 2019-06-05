import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import Toaster from 'v-toaster'

// Globally scss
import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'v-toaster/dist/v-toaster.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueMoment, {moment})
Vue.use(Toaster, {timeout: 5000})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
