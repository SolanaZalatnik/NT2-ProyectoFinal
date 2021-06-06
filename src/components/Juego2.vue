<template>
  <div>
    <h1>Pregunta {{contPreguntas}}</h1>
    <br>
    <div class="card text-white bg-dark mb-3" style="max-width:319px; width: auto; margin: auto auto">
      <div class="card-body">
        <h5 class="card-text">{{this.preguntaSeleccionada.pregunta}}</h5>
      </div>
    </div>

  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style="max-width:319px; width: auto; margin: auto auto">
    <div class="row mx-auto p-2">
      <button type="button" class="btn btn-dark">{{this.preguntaSeleccionada.respuesta1}}</button>
      <button type="button" class="btn btn-dark">{{this.preguntaSeleccionada.respuesta2}}</button>
    </div>
    <br>
    <div class="row mx-auto p-2"> 
      <button type="button" class="btn btn-dark">{{this.preguntaSeleccionada.respuesta3}}</button>
      <button type="button" class="btn btn-dark">{{this.preguntaSeleccionada.respuesta4}}</button>
    </div>
  </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      url: 'https://60b95da180400f00177b66e2.mockapi.io/preguntas',
      preguntas: [],
      pregRandom: [],
      preguntaSeleccionada: [],
      contPreguntas: 1,
      categoriaSeleccionada: ''
    }
  },
  methods:{
    incrementar(){
      this.contPreguntas++
    }
  },
  created: async function() {

    //this.categoriaSeleccionada = $store.state.categoria

    //console.log('cate sel: ' + categoriaSeleccionada)
    //const cat = {categoriaSeleccionada}
    //this.$store.dispatch('categoriaSeleccionada', cat)
    try{
      //tiene que traer las pregs de la categoria seleccionada
        const response = this.preguntas = await axios.get(this.url)
        this.preguntas = response.data
    }catch(error){
        console.log(error)
    }

    this.pregRandom = Math.floor(Math.random()*(9 - 1)) + 1 
    //Math.floor(Math.random() * (max - min)) + min;

    console.log('preg random: ' + this.pregRandom) 

    try{
        const response = this.preguntas = await axios.get(this.url + '/' + this.pregRandom)
        this.preguntaSeleccionada = response.data
    }catch(error){
        console.log(error)
    }
    console.log('ruta: ' + this.url + '/' + this.pregRandom.id) 
    console.log('preg sel: ' + this.preguntaSeleccionada.pregunta) 
  }
}
</script>

<style>

</style>