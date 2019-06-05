<template>
  <div class="container post-container">
      
      <div class="row">
        <div class="col-md-8 col-xs-12">
            <div class="row">
                <card v-for="(item, index) in postList" :postdata="item" :key="index" :index="index"></card>

                <BPagination :totalPage="pages - 0" @btnClick="pagination"></BPagination>
            </div>
        </div>
        <div class="col-md-4 col-xs-12">

            <!-- Most Used Tags -->
            <div class="widget">
                <h3>Tags</h3>
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

    & .widget {
        text-align: left;
        padding: 0 30px;

        & h3 {
            font-weight: bold;
            margin-bottom: 15px;
        }

        & span {
            display: inline-block;
            width: 100%;
            height: 55px;
            line-height: 55px;
            border-bottom: 1px solid #ecebeb;
            color: #565656;
            cursor: pointer;

            &:hover {
                color: $middleblue;
            }

            &:last-child {
                border-bottom: none;
            }
        }
    }
}
</style>

