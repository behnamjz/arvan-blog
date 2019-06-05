<template>
  <div class="container article" v-if="mypost">
    <img :src='mypost.author.image' :alt='mypost.title' v-if="mypost.author" />
    <h1>{{mypost.title}}</h1>
    <p>
      {{mypost.body}}
    </p>
    <p>
      {{mypost.description}}
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Config from '../../config/config.js'
import {ErrorFunction} from '../repositories/Repository'

Vue.use(VueAxios, axios)
var baseUrl = Config.baseUrl
export default {
  name: 'single',
  components: {
  },
  data () {
    return {
      mypost: []
    }
  },
  created () {
    this.slug = this.$route.params.slug
    this.getPost()
  },
  methods: {
    // get post
    getPost () {
      let callerThis = this
      axios.get(baseUrl + '/articles/' + this.slug)
      .then(res => {
        this.mypost = res.data.article
      })
      .catch(error => {
        ErrorFunction(error,callerThis)
      })
    }
  }
}
</script>
<style lang="scss">
.article {
  padding: 60px 0;
  position: relative;

  & img {
    width: 100%;
    margin-bottom: 45px;
  }

  & h1 {
    position: absolute;
    font-size: 25px;
    top: 100px;
    right: 0;
    left: 0;
    margin: auto;
    color: white;
    background: #44444430;
    width: fit-content;
    padding: 1% 3%;
    border-radius: 4px;
    text-transform: uppercase;
  }
}
</style>

