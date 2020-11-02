<template>
<f7-page>
  <div id="news" v-for='(news,idx) in getGamesArr' :key='idx'>
    <h2>{{news.title}}</h2>
    <span v-html="news.contents"></span>
  </div>
</f7-page>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['setShowBackButton'])
  },
  
  mounted () {
    this.setShowBackButton(false) 
  },
  computed: {
    ...mapGetters(['getGamesArr'])
  }
}
</script>

<style lang='scss'>
  #news {
    padding:0 10px;
  }

  h2,span {
    text-align: center;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 80%;
  }
</style>