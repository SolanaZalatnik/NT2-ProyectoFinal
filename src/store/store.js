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
    /* categoriaSeleccionada( cate){
      this.state.categoriaId = cate['cat']
    }, */
    getUsuario(){
      alert(this.state.username)
      return this.state.username
    },
    
  },
  modules: {
  },
  getters: {
    obtenerCategoriaId: function (state) {
      return state.categoriaId;
  },
  hayUsuario: function (state) {
    if(state.username==''){
      return false
    }else{
      return true
    }
},
  }
})