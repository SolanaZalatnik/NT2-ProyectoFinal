<template>
  <div>
    <h1>Seleccione la categoría</h1>
    <div>
      <b-dropdown text="Seleccione categoría">
        <b-dropdown-item @click="empezarJuego(categoria.name)" v-for="categoria in categorias" :key="categoria.id">{{categoria.name}}</b-dropdown-item>
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
      let ruta = '/juego/' + categoria
      this.$router.push(ruta)
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