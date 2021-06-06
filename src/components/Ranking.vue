<template>
  <div>
      <h1>Ranking</h1>
          <button type="button" class="btn btn-dark" @click="getUsuarios()">Traer usuarios</button>

          <ol>
              <li v-for="usuario in usuarios" :key="usuario.id">
                  {{usuario.name}} con {{usuario.points}} puntos.
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
  methods: {
    async incializar () {
      await this.getUsuarios ()
    },
    async getUsuarios () {
      try{
        const response = this.usuarios = await axios.get(this.url)
        this.usuarios = response.data.slice(0, 3)
        console.log(response.data)
      //devuelve una promesa
      }catch(error){
        console.log(error)
      }
    },
  }
}
</script>

<style>
#Tabla{
  width: 130px;
  overflow: auto;
}
</style>