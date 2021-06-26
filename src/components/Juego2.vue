<template>
  <div>
    <circular-count-down-timer
      :initial-value="10"
      @finish="finished"
      @update="updated"
    ></circular-count-down-timer>
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
        style="margin-right: 30px" 
        class="btn btn-dark"
        @click="validarRespuesta('1')">
          {{ this.preguntaSeleccionada.respuesta1 }}
        </button>
        <button 
        type="button"
        class="btn btn-dark"
         @click="validarRespuesta('2')">
          {{ this.preguntaSeleccionada.respuesta2 }}
        </button>
      </div>
      <br />
      <div class="row mx-auto p-2">
        <button
          type="button"
          style="margin-right: 30px"
          class="btn btn-dark"
          @click="validarRespuesta('3')"
        >
          {{ this.preguntaSeleccionada.respuesta3 }}
        </button>
        <button
          type="button"
          class="btn btn-dark"
          @click="validarRespuesta('4')"
        >
          {{ this.preguntaSeleccionada.respuesta4 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CircularCountDownTimer from "./CircularCountDownTimer";

export default {
  components: {
    CircularCountDownTimer,
  },
  data() {
    return {
      url: "https://60b95da180400f00177b66e2.mockapi.io/preguntas",
      preguntas: [],
      pregRandom: [],
      preguntaSeleccionada: [],
      contPreguntas: 1,
      categoriaSeleccionada: "",
      some_variable: false,
      notSelected: "btn btn-dark",
      isClicked: "btn btn-success",
      preguntaDeCategoriaSeleccionada: [],
      clicked: false,
      
    };
  },
  methods: {
    changeColor() {
      this.notSelected = this.isClicked;
    },
    incrementar() {
      this.contPreguntas++;
    },
    updateTime() {
      this.$refs.countDown.updateTime(-10);
    },
    finished: () => {
      setTimeout(function () {
        alert("termino el tiempo");
      }, 1000);
    },
    updated: (status) => {
      console.log(status);
    },
    validarRespuesta(respuesta) {
      if (this.preguntaSeleccionada.respuestaCorrecta == respuesta) {
        /* aca deberia validar la respuesta sea correcta o no 
      y deberia mostrar la siguiente pregunta actualizando la pagina*/
        alert("correcta");
      } else {
        alert("incorrecta");
      }
     
    },
  },
  mounted() {
    setTimeout(
      function () {
        this.some_variable = true;
      }.bind(this),
      30000
    );
  },
  created: async function () {
    this.preguntaDeCategoriaSeleccionada = [];
    this.categoriaSeleccionada =this.$store.dispatch("getCategoriaId" ); /* no puedo asignarle el valor del 
    id de la categoria al atributo */
    
    try {
      //tiene que traer las pregs de la categoria seleccionada
      let preg = await axios.get(this.url);
      let arrayPreg = preg.data;

      for (let i = 0; i < 10; i++) {
        if ("2" == arrayPreg[i].categoria) {
          /* Aca no funciona por que categoriaSeleccionada
         es igual a undefind, cunado lo pruebo pasandole algun valor funciona bien*/
          this.preguntaDeCategoriaSeleccionada.push(i);
        }
      }
    } catch (error) {
      console.log(error);
    }

    this.pregActual = this.preguntaDeCategoriaSeleccionada.pop() + 1;
    console.log("preg actual: " + this.pregActual);

    try {
      const response = (this.preguntas = await axios.get(
        this.url + "/" + this.pregActual
      ));
      this.preguntaSeleccionada = response.data;
    } catch (error) {
      console.log(error);
    }
    console.log("ruta: " + this.url + "/" + this.pregActual.id);
    console.log("preg sel: " + this.preguntaSeleccionada.pregunta)
  },
};
</script>

