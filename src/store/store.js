import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgHome: 'Home',
    usuarioId:'',
    username: '',
    password: '',
    categoriaId: '',
    puntos: 0
  },
  mutations: {
    changeUserData (state, userObject) {
      state.usuarioId = userObject['id']
      state.username = userObject['nombre']
      state.password = userObject['password']
      state.puntos = userObject['points']
    },
    categoriaSeleccionada(state, cate){
      state.categoriaId = cate['cat']
    },
    sumarPuntos(state,suma){
      state.puntos = state.puntos + suma
    },
    restarPuntos(state,resta){
      state.puntos = state.puntos - resta
    }
  },
  actions: { 
    async categoriaSeleccionada({ commit }, cate) {
      return Promise.resolve(commit("categoriaSeleccionada", cate));
    },
    async changeUserData({ commit }, userObject) {
      return Promise.resolve(commit("changeUserData", userObject));
    },
    async sumarPuntos({ commit }, suma) {
      return Promise.resolve(commit("sumarPuntos", suma));
    },
    async restarPuntos({ commit }, resta) {
      return Promise.resolve(commit("restarPuntos", resta));
    },
  },
  modules: {
  },
  getters: {
    obtenerCategoriaId: function (state) {
      return state.categoriaId;
  },
  hayUsuario: function (state) {
    if(state.username == ''){
      return false
    }else{
      return true
    }
  },
   obtenerUsuarioId: function (state) {
    return state.usuarioId;
  },
  getPuntos:function(state){
    return state.puntos;
  },
  getUsuario:function(state){
    return state.username;
  },  
}
})