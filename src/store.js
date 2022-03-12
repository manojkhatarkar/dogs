import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const isLogin = 'false'
export const store = new Vuex.Store({
  data () {
    return {
      name: 'mragank'
    }
  },
  state: {

  },
  actions: {
    test () {
      return 'yes'
    }
  },
  mutations: {

  }
})
