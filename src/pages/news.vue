<template>
<f7-page>
  <div id="news" v-for='(news,idx) in currentNewsArr' :key='idx'>
    <h2>{{news.title}}</h2>
    <span v-html="news.contents"></span>
  </div>
</f7-page>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
    ...mapState(['currentNewsArr'])
  },
  mounted () {
    this.$store.commit('setShowBackButton',true) 
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