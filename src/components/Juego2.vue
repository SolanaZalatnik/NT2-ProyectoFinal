<template>
  <div>
    <circular-count-down-timer
        :initial-value="this.time"
        @finish="finished"
        @update="updated"
        ref="countdown"
    ></circular-count-down-timer>
    <br>
    <h1 style="color: black">Pregunta {{ contPreguntas }}</h1>
    <br />
    <div
      class="card text-white bg-dark mb-3"
      style="max-width: 319px; width: auto; margin: auto auto"
    >
      <div class="card-body">
        <h5 class="card-text">{{ this.preguntaSeleccionada.pregunta }}</h5>
      </div>
    </div>

    <div
      class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      style="max-width: 500px; width: auto; margin: auto auto"
    >
      <div class="row mx-auto p-2">
        <button 
        id="btn1"
        style="margin-right: 30px" 
        class="btn btn-dark"
        @click="validarRespuesta('1')">
          {{ this.preguntaSeleccionada.respuesta1 }}
        </button>
        <button 
        id="btn2"
        type="button"
        class="btn btn-dark"
         @click="validarRespuesta('2')">
          {{ this.preguntaSeleccionada.respuesta2 }}
        </button>
      </div>
      <br />
      <div class="row mx-auto p-2">
        <button
          id="btn3"
          type="button"
          style="margin-right: 30px"
          class="btn btn-dark"
          @click="validarRespuesta('3')"
        >
          {{ this.preguntaSeleccionada.respuesta3 }}
        </button>
        <button
          id="btn4"
          type="button"
          class="btn btn-dark"
          @click="validarRespuesta('4')"
        >
          {{ this.preguntaSeleccionada.respuesta4 }}
        </button>
      </div>
    </div>
    <div>
      <br>
      <button id="btnSiguiente" type="button" disabled class="btn btn-dark" @click="traerSiguiente()">
          Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CircularCountDownTimer from "./CircularCountDownTimer.vue";


export default {
  components: {
    CircularCountDownTimer,
  },
  data() {
    return {
      url: "https://60b95da180400f00177b66e2.mockapi.io/preguntas",
      urlUsuarios:'https://60b56f2efe923b0017c840c7.mockapi.io/usuarios',
      preguntas: [],
      preguntaSeleccionada: [],
      contPreguntas: 1,
      categoriaSeleccionada: "",
      some_variable: false,
      cantCorrectas: 0,
      cantIncorrectas: 0,
      time: 60,
      cantPreguntas: 5
    };
  },
  methods: {
    traerSiguiente(){
      //setear el time del countdown en 10 de nuevo
      if(this.contPreguntas >= this.cantPreguntas){
        alert(' Finalizo el juego\n El total de puntos de la partida es: ' + (this.cantCorrectas - this.cantIncorrectas))
        let ruta = '/ranking/'
        this.$router.push(ruta)
      }else{
        this.incrementar()
        this.preguntaSeleccionada = this.preguntas.data[this.contPreguntas - 1]
        document.getElementById('btn1').disabled = false
        document.getElementById('btn2').disabled = false
        document.getElementById('btn3').disabled = false
        document.getElementById('btn4').disabled = false
        document.getElementById('btnSiguiente').disabled = true
      }
    },
    incrementar() {
      this.contPreguntas++;
    },
    updateCountdown: () => {
      this.$refs.countdown.updateTime(10)
    },
     finished: () => {
      document.getElementById('btn1').disabled = true
      document.getElementById('btn2').disabled = true
      document.getElementById('btn3').disabled = true
      document.getElementById('btn4').disabled = true
      document.getElementById('btnSiguiente').disabled = true
      setTimeout(function () {
        alert(' Termino el tiempo')
      }, 1000);
    },
    updated: (status) => {
      console.log(status);
    },
    validarRespuesta(respuesta) {
      this.deshabilitarBotones()
      if (this.preguntaSeleccionada.respuestaCorrecta == respuesta) {
        this.cantCorrectas++
        this.respuestaCorrecta()
        alert(" Correcta!\n Suma un punto\n Tus puntos: " + this.getPuntos());
      } else {
        this.cantIncorrectas++
        this.respuestaIncorrecta()
        alert(" Incorrecta :(\n Resta un punto\n Tus puntos: " + this.getPuntos());
      }
      document.getElementById('btnSiguiente').disabled = false
    },
    deshabilitarBotones(){
      document.getElementById('btn1').disabled = true
      document.getElementById('btn2').disabled = true
      document.getElementById('btn3').disabled = true
      document.getElementById('btn4').disabled = true
    },
    obtenerCategoriaId(){
      return this.$store.getters.obtenerCategoriaId
    },
       obtenerUsuarioId(){
       return this.$store.getters.obtenerUsuarioId
    },
    async respuestaCorrecta(){
      let post = {        
        points:this.sumarPuntos()
      }
      const respuesta = await axios.put(this.urlUsuarios + "/" + this.obtenerUsuarioId(), post)
      console.log(respuesta)
    },
     async respuestaIncorrecta(){    
      let post = {points:this.restarPuntos()}
      const respuesta = await axios.put(this.urlUsuarios + "/" + this.obtenerUsuarioId(), post)
      console.log(respuesta)
    },
      getPuntos(){
      return this.$store.getters.getPuntos
    },
    sumarPuntos(){
      this.$store.dispatch('sumarPuntos', 1)
      return this.getPuntos()
    },
    restarPuntos(){
       this.$store.dispatch('restarPuntos', 1)
      return this.getPuntos()
    },
  },
  mounted() {
    setTimeout(
     function() {
        this.some_variable = true;
      }.bind(this),
      30000
    );
  },
  created: async function () { 
    this.categoriaSeleccionada = this.obtenerCategoriaId()
    console.log('cat: ' + this.categoriaSeleccionada)
    console.log('url: '+ this.url + '?categoria' + this.categoriaSeleccionada)
    try{
      this.preguntas = await axios.get(this.url + '?categoria=' + this.categoriaSeleccionada);
      this.preguntaSeleccionada = this.preguntas.data[this.contPreguntas - 1]
    }catch(error){
      console.log(error)
    }
  },
};
</script>

