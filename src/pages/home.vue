<template>
  <f7-page name="home">
    <div id="home">
      <div v-for='(game,idx) in gamesArr' :key='game.stg_id'>
        <span @click='getNews(game.stg_id)'>
          {{idx+1+'.'}} {{game.stg_name}}
        </span>
      </div>
    </div>
  </f7-page>
</template>

<script>
import axios from 'axios'
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      currentSelectedNewsArr: []
    }
  },
  components: {

  },
  methods: {
     getNews (gameId) {
        axios.get('http://097a122.e2.mars-hosting.com/games/steam-news',{
          params:{
            steamId:gameId
          }
        })
        .then((response) => {
          if(response.data.news){
            this.showNewsWindow = true
            this.currentSelectedNewsArr = response.data.news.newsitems
            this.$f7.views.main.router.navigate('/news/')
            this.$store.commit('setCurrentNewsArr', this.currentSelectedNewsArr)

          }
          else{
            console.log('there are not any news')
          }
        })
        .catch((error) => {
          console.log(error);
        })
      },
  },
  computed:{
    ...mapState(['gamesArr'])
  },
}
</script>

<style lang="scss">
  #home {
    min-height: 92%;
    background-color: black;
    color: #fff;
    font-size: 1.2em;
    overflow-y: auto ;
    div{
      span {
        text-align: center;
        display: block;
        margin: 10px 0;
        &:hover {
          transform: scale(1.1);
          transition-duration: .3s;
        }
      }
    }
  }
</style>