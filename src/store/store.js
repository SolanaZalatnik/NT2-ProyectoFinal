import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgHome: 'Home',
    username: '',
    password: '',
    categoria: ''
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
    categoriaSeleccionada(state, cat){
      state.categoria = cat['ca']
    }
  },
  modules: {
  },
  getters: {
  }
})