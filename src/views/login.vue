<template>
  <div class="container">
    <div class="authentication-section row">
      <div class="col-md-6">
        <h2>LOGIN</h2>
        <input type="text" placeholder="email" v-model='usermail'>
        <input type="password" placeholder="password" v-model='userpassword'>
        <button @click='login' :disabled="loginflag" :class='{"btn-disabled": loginflag}'>LOGIN</button>
      </div>
      <div class="col-md-6">
        <h2>REGISTER</h2>
        <input type="text" placeholder="username" v-model='regusername'>
        <input type="text" placeholder="email" v-model='regmail'>
        <input type="password" placeholder="password" v-model='regpass'>
        <button @click='register' :disabled="loginflag" :class='{"btn-disabled": regflag}'>Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import Config from '../../config/config.js'
import {ErrorFunction} from '../repositories/Repository'

Vue.use(VueCookies)
Vue.use(VueAxios, axios)
var baseUrl = Config.baseUrl
export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      usermail: null,
      userpassword: null,
      loginflag: false,
      regmail: null,
      regusername: null,
      regpass: null,
      regflag: false
    }
  },
  methods: {
    // Login 
    login () {
      this.loginflag = true
      let callerThis = this
      axios.post(baseUrl + '/users/login',{
        "user":{
          'email': this.usermail,
          'password': this.userpassword,
          'grant_type': 'password'
        }
      })
      .then(response => {
        this.loginflag = false
        this.$cookies.set('token',response.data.user.token)
        this.$router.go('/') 
      })
      .catch(error => {
        this.loginflag = false
        ErrorFunction(error,callerThis)
      })
    },

    // Register 
    register () {
      this.regflag = true
      let callerThis = this
      axios.post(baseUrl + '/users/',{
        "user":{
          "username": this.regusername,
          "email": this.regmail,
          "password": this.regpass
        }
      })
      .then(response => {
        this.regflag = false
        this.$toaster.success('User Successfully added.')
        this.$cookies.set('token',response.data.user.token)
        this.$router.push('/') 
      })
      .catch(error=> {
        this.regflag = false
        ErrorFunction(error,callerThis)
      })
    }
  }
}
</script>
