<template>
  <f7-app :params="f7params" >
    <TheNavigation @handleSearchNews='searchNews'/>
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
  import TheNavigation from '../components/TheNavigation'
  import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';
  import axios from 'axios'
  import {mapState, mapActions} from 'vuex'

  export default {
    components: {
      TheNavigation
    },
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          id: 'io.framework7.myapp', // App bundle ID
          name: 'vezbaf7', // App name
          theme: 'auto', // Automatic theme detection



          // App routes
          routes: routes,


          // Input settings
          input: {
            scrollIntoViewOnFocus: Device.cordova && !Device.electron,
            scrollIntoViewCentered: Device.cordova && !Device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },
        // Login screen data
        username: '',
        password: '',

        showNewsWindow:false,
        
      }
    },
    methods: {
      ...mapActions(['setGamesArr']),
      // alertLoginData() {
      //   this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password, () => {
      //     this.$f7.loginScreen.close();
      //   });
      // }
       searchNews(searchGame) {
        axios.get('http://097a122.e2.mars-hosting.com/games/search-games', {
          params: {
            searchGame:searchGame
          }
        })
        .then(async (response) =>  {
          let res = await this.setGamesArr([]);
          res;
          this.setGamesArr(response.data.games);
          if(!response.data.games) {
            this.setGamesArr([]);
          }
        })
        .catch((e) => {
          console.log(e);
        })
      },
    },
    computed:{
      gamesArr(){
        return this.$store.getters.getGamesArr
      }
    },
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (Device.cordova) {
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>