import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gamesArr: [],
    currentNewsArr: [],
    showBackButton: false
  },
  mutations: {
    SET_GAMES_ARR(state, payload) {
      state.gamesArr = payload
    },
    setCurrentNewsArr(state, payload) {
      state.currentNewsArr = payload
    },
    SET_SHOW_BACK_BUTTON(state, payload) {
      state.showBackButton = payload
    }
  },
  getters: {
    getGamesArr(state) {
      console.log('ovo', store.state.gamesArr)
      return store.state.gamesArr;
    }
  },
  actions: {
    setGamesArr(store, payload) {
      store.commit('SET_GAMES_ARR', payload)
    },
    setShowBackButton(store, payload) {
      store.commit('SET_SHOW_BACK_BUTTON', payload)
    }
  }
})


export default store