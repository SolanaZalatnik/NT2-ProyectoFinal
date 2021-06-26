import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgHome: 'Home',
    username: '',
    password: '',
    categoriaId: '',
    
  },
  mutations: {
    changeUserData (state, userObject) {
      state.username = userObject['nombre']
      state.password = userObject['password']

      console.log(this.state.username)
      console.log(state.password)
    },
    categoriaSeleccionada(state, cate){
      state.categoriaId = cate['cat']
    },

  },
  actions: {
    
    getUsuario(){
      alert(this.state.username)
      return this.state.username
    },
    getCategoriaId(){
       console.log("categoria seleccionada: "+ this.state.categoriaId)
      return this.state.categoriaId
      
    }
  },
  modules: {
  },
  getters: {
  }
})