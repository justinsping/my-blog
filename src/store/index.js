import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headNavIsShow: true
  },
  mutations: {
    changeHeadNavShow (state, bol) {
      state.headNavIsShow = bol
    }
  }
})
