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
    setShowBackButton(state, payload) {
      state.showBackButton = payload
    }
  },
  getters: {
    getGamesArr(state) {
      return state.gamesArr;
    }
  },
  actions: {
    setGamesArr(store, payload) {
      store.commit('SET_GAMES_ARR', payload)
    }
  }
})


export default store