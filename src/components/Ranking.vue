<template>
  <div>
      <h1>Ranking</h1>
          <ol>
              <li v-for="usuario in usuarios" :key="usuario.points">
                  &#x1F947; {{usuario.name}} con {{usuario.points}} puntos.
              </li>
          </ol>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  data () {
    return {
      usuarios: [],
      url: 'https://60b56f2efe923b0017c840c7.mockapi.io/usuarios',
    }
  },
  created: async function() {
    try{
        let usuariosObtenidos
        const response = this.usuariosObtenidos = await axios.get(this.url)
        usuariosObtenidos = response.data
        usuariosObtenidos.sort(function (a, b) {
          if(a.points > b.points) {return -1}
          if(a.points < b.points) {return 1}
          return 0
        })
        this.usuarios = usuariosObtenidos.slice(0,3)
      }catch(error){
        console.log(error)
      }
  },
  methods: {

  }
}
</script>

<style>
#Tabla{
  width: 130px;
  overflow: auto;
}
</style>