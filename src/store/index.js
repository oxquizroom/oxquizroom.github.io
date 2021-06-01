import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oneBlogScale: 1
  },
  mutations: {
    setObScale (state, scale) {
      state.oneBlogScale = scale
    }
  },
  actions: {
  },
  modules: {
  }
})
