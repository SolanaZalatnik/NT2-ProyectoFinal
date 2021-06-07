<template>
  <div>
    <circular-count-down-timer
        :initial-value="10"
        @finish="finished"
        @update="updated"
    ></circular-count-down-timer>
    <h1>Pregunta {{contPreguntas}}</h1>
    <br>
    <div class="card text-white bg-dark mb-3" style="max-width:319px; width: auto; margin: auto auto">
      <div class="card-body">
        <h5 class="card-text">{{this.preguntaSeleccionada.pregunta}}</h5>
      </div>
    </div>

  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style="max-width: 500px; width: auto; margin: 20px; margin-left: 700px">
    <div class="row mx-auto p-2">
      <button 
        type="button"
        style="margin-right: 30px"
        v-bind:class="[notSelected]"
        @click="changeColor">{{this.preguntaSeleccionada.respuesta1}}
      </button>
      <button 
        type="button"
        v-bind:class="[notSelected]"
        @click="changeColor">{{this.preguntaSeleccionada.respuesta2}}
      </button>
    </div>
    <br>
    <div class="row mx-auto p-2"> 
      <button type="button" style="margin-right: 30px" class="btn btn-dark">{{this.preguntaSeleccionada.respuesta3}}</button>
      <button type="button" class="btn btn-dark">{{this.preguntaSeleccionada.respuesta4}}</button>
    </div>
  </div>
  </div>
</template>

<script>

import axios from 'axios'
import CircularCountDownTimer from "./CircularCountDownTimer"

export default {
  components:{
     CircularCountDownTimer
  },
  data(){
    return {
      url: 'https://60b95da180400f00177b66e2.mockapi.io/preguntas',
      preguntas: [],
      pregRandom: [],
      preguntaSeleccionada: [],
      contPreguntas: 1,
      categoriaSeleccionada: '',
      some_variable: false,
      notSelected : 'btn btn-dark',
      isClicked: 'btn btn-success',

    }
  },
  methods:{
    changeColor() {
      this.notSelected = this.isClicked
    },
    incrementar(){
      this.contPreguntas++
    },
    updateTime(){
      this.$refs.countDown.updateTime(-10)
    },
    finished: () => {
      setTimeout(function() { alert('termino el tiempo'); }, 1000);
    },
    updated: (status) => {
       console.log(status)
    }
  },
  mounted(){
    setTimeout(function(){
      this.some_variable = true;
      }.bind(this), 30000);
  },
  created: async function() {

    //this.categoriaSeleccionada = $store.state.categoria

    //console.log('cate sel: ' + categoriaSeleccionada)
    //const cat = {ca: this.categoriaSeleccionada}
    //this.categoriaSeleccionada = await this.$store.dispatch('categoriaSeleccionada', cat)
    //this.categoriaSeleccionada = await this.$store.state.categoria
    //console.log(this.categoriaSeleccionada)
    
    try{
      //tiene que traer las pregs de la categoria seleccionada
        const response = this.preguntas = await axios.get(this.url)
        this.preguntas = response.data
    }catch(error){
        console.log(error)
    }

    this.pregRandom = Math.floor(Math.random()*(3 - 1)) + 1 

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