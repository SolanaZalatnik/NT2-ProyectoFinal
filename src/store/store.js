import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgHome: 'Home',
    username: '',
    password: ''
  },
  mutations: {
  },
  actions: {
    changeUserData (state, userObject) {
      state.username = userObject['nombre']
      state.password = userObject['password']

      console.log(state.username)
      console.log(state.password)
    },
  },
  modules: {
  },
  getters: {
  }
})