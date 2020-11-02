<template>
  <div id="nav">
    <h1>
      Game news app
    </h1>
    <input type="text" placeholder="Begin the search" v-model='searchGame' @input='startSearchGame'>
    <button @click="goBack" v-if='showBackButton'>Back</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      searchGame:'',
      searchGameTimer: null,
    }
  },
  methods: {
    startSearchGame (gameId) {
      this.stopSearchGame();
      this.searchGameTimer = setTimeout(() => {
        this.handleSearchNews();
      }, 600);
    },
    stopSearchGame () {
      if (this.searchGameTimer) {
        clearTimeout(this.searchGameTimer)
        this.searchGameTimer = null;
      }
    },
    handleSearchNews () {
      console.log('ADAHSDAHS');
      this.$emit('handleSearchNews',this.searchGame)
    },
    goBack () {
      this.$f7.views.main.router.back()
    }
  },
  computed: {
      ...mapState(['showBackButton'])
  }
}
</script>

<style lang='scss'>
  #nav {
    background-color: rgb(39, 34, 10);
    min-height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Anton', sans-serif;
    padding: 0 30px;
    h1 {
      color: #fff;
    }
    input {
      background: #fff;
      width: 300px;
    }
  }

  @media only screen and (max-width: 600px) {
    #nav {
      flex-direction: column;
      padding:0 0 30px 0;
    }
  }
</style>