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
    changeUserData (state, userObject) {
      state.username = userObject['nombre']
      state.password = userObject['password']

      console.log(this.state.username)
      console.log(state.password)
    },

  },
  actions: {
    categoriaSeleccionada(state, cat){
      state.categoria = cat['ca']
    },
    getUsuario(){
      alert(this.state.username)
      return this.state.username
    },
  },
  modules: {
  },
  getters: {
  }
})