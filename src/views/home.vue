<template>
  <div class="container post-container">
      
      <div class="row">
        <div class="col-md-8 col-xs-12">
            <div class="row">
                <card v-for="(item, index) in postList" :postdata="item" :key="index" :index="index"></card>
            </div>
        </div>
        <div class="col-md-4 col-xs-12"> sidebar</div>
      </div>
      
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Config from '../../config/config.js'
import Card from '../components/card'

Vue.use(VueAxios, axios)
var baseUrl = Config.baseUrl
export default {
  name: 'home',
  components: {Card},
  data () {
    return {
      postList: []
    }
  },
  created () {
      this.getPost()
  },
  methods: {
    // get post
    getPost () {
        axios.get(baseUrl + '/articles')
        .then(res => {
            this.postList = res.data.articles
        })
        .catch(err => {
            console.log(err)
        })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';
.post-container {
    padding: $basesize * 3 0;

    & .post-card {
        padding: 0;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0px 0px 16px #ccc;
        margin-bottom: $basesize * 4; 

        & img {
            width: 100%;
            height: 250px;
            background: #e6e6e6;
            display: inline-block;
        }

        & .card-text {
            padding: $basesize * 2 $basesize;

            & h2 {
                color: $darkgray;
                font-size: 22px;
                margin-bottom: $basesize;
            }

            & p {
                color: $mediumgray;
                font-size: 16px;
                white-space: nowrap; 
                overflow: hidden;
                text-overflow: ellipsis;
            }

            & h4 {
                color: $thingray;
                font-size: 14px;
                margin-bottom: $basesize;

            }
        }
    }
}
</style>

