<template>
  <div>
      <h1>{{$store.state.msgHome}}</h1> <!-- NO ANDA ARREGLAR-->
      <button type="button" class="btn btn-dark" @click="empezarJuego()">Empezar juego</button>
  </div>
</template>

<script>
export default {
  methods:{
    empezarJuego(){
      let ruta = '/juego/'
      this.$router.push(ruta)
    }
  }
}
</script>

<style>

</style>