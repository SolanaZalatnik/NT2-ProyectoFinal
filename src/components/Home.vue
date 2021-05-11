<template>
  <div>
      <h1>Home</h1>
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