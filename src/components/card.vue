<template>
	<router-link :to="'/post/'+ postdata.slug" v-if="postdata" class="col-md-6">
        <div class="post-card">
          <img :src="postdata.author.image" :alt='postdata.title' />
          <div class="col-12 card-text">
              <h2>{{postdata.title}}</h2>
              <h4>{{postdata.createdAt | moment("dddd, MMMM Do YYYY") }}</h4>
              <p>{{postdata.description}}</p>
          </div>
        </div>
	</router-link>

</template>
<script>
export default {
  name: 'Card',
  props: ['postdata', 'index'],
  data () {
    return {}
  }
}
</script>