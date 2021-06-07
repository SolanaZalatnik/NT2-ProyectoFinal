<template>
  <div>
      <h1>Ranking</h1>
          <ol>
              <li style="font-size: 30px; margin:30px" v-for="usuario in usuarios" :key="usuario.points" v-on="cambiarLogo(usuario)">
                  {{icono}} {{usuario.name}} con {{usuario.points}} puntos.
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
      icono: []
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
    cambiarLogo(usuario){
      const iconos = ['🥇', '🥈', '🥉']
      this.icono = iconos[this.usuarios.indexOf(usuario)]
    }
  }
}
</script>

<style>
#Tabla{
  width: 130px;
  overflow: auto;
}
</style>