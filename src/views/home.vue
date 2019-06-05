<template>
  <div class="container post-container">
      
      <div class="row">
        <div class="col-md-8 col-xs-12">
            <div class="row">
                <card v-for="(item, index) in postList" :postdata="item" :key="index" :index="index"></card>

                <BPagination v-if="paginationflag" :totalPage="pages - 0" @btnClick="pagination"></BPagination>
            </div>
        </div>
        <div class="col-md-4 col-xs-12">

            <!-- Most Used Tags -->
            <div class="widget">
                <h3 v-if="tagList">Tags</h3>
                <span v-for="(tag , index) in tagList" :key='index'>{{tag}}</span>
            </div>

        </div>
      </div>
      
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Config from '../../config/config.js'
import Card from '../components/card'
import BPagination from '../plugin/pagination.vue'
import {ErrorFunction} from '../repositories/Repository'

Vue.use(VueAxios, axios)
var baseUrl = Config.baseUrl
export default {
  name: 'home',
  components: {Card, BPagination},
  data () {
    return {
      postList: [],
      tagList: [],
      paginationflag: false,
      pages: 20,
      activepage: 1,
      offset: 0
    }
  },
  created () {
      this.getPosts()
      this.getTags()
  },
  methods: {
    // get post
    getPosts () {
        let callerThis = this 
        axios.get(baseUrl + '/articles?limit=20&offset='+this.offset)
        .then(res => {
            this.postList = res.data.articles
            this.paginationflag = true
        })
        .catch(error => {
            ErrorFunction(error,callerThis)
        })
    },

    // get Tags
    getTags () {
        let callerThis = this 
        axios.get(baseUrl + '/tags')
        .then(res => {
            this.tagList = res.data.tags
        })
        .catch(error => {
           ErrorFunction(error,callerThis)
        })
    },

    //Pagination
    // pagination 
    pagination (value) {
      this.activepage = value
      this.offset = 20 * this.activepage
      this.getPosts()
    }
  }
}
</script>

