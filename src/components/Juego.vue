<template>
  <div>
    <h1>Seleccione la categoría</h1>
    <div>
      <b-dropdown text="Seleccione categoría">
        <b-dropdown-item @click="empezarJuego(categoria.id)" v-for="categoria in categorias" :key="categoria.id">{{categoria.name}}</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      categorias:[],
      url:'https://60b95da180400f00177b66e2.mockapi.io/categorias',
    }
  },
  methods:{
    empezarJuego(categoria){
      //const ruta = '/juego/' + categoria
      if(this.hayUsuario()){
      const cate =  {cat:categoria}
      this.$store.commit('categoriaSeleccionada', cate)
      const ruta = '/juego2'
      this.$router.push(ruta)
      }
      else{
        alert("Debe ingresar un usuario")
        const ruta = '/Login'
      this.$router.push(ruta)
      }
    },
    hayUsuario(){
      return this.$store.getters.hayUsuario
    }
  },
  created: async function() {
    try{
        const response = this.categorias = await axios.get(this.url)
        this.categorias = response.data
      }catch(error){
        console.log(error)
      }
  }
}
</script>

<style>

</style>