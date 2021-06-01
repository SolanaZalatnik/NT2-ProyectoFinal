<template>
  <div>
    <h1>Usuario</h1>
    <button type="button" class="btn btn-dark" @click="getUsuarios()">Traer usuarios</button>
    <button type="button" class="btn btn-dark" @click="saveUsuario()">Guardar usuario</button>
    <button type="button" class="btn btn-dark" @click="deleteUsuario()">Eliminar usuario</button>
    <!--
    <samp>{{usuarios}}</samp>
    -->
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">{{usuario.id + ' ' + usuario.name}}</li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      usuarios:[],
      url:'https://60b56f2efe923b0017c840c7.mockapi.io/usuarios',
    }
  },
  methods:{
    async inicializar(){
      await this.getUsuarios()
      console.log(this.usuarios[0].username)
    },
    async getUsuarios(){
      try{
        const response = this.usuarios = await axios.get(this.url)
        this.usuarios = response.data
      //devuelve una promesa
      }catch(error){
        console.log(error)
      }
    },  
    async saveUsuario(){

      let usuarioName = prompt('Ingresá el nombre de un usuario')

      const usuario = {
        name: usuarioName
      }
      const respuesta = await axios.post(this.url, usuario)
      console.log(respuesta)
    },
    async deleteUsuario(){
      
      const userId = prompt('Ingresá el ID del usuario a eliminar')

      try {
        const respuesta2 = await axios.delete(this.url + '/' + userId)
        console.log(respuesta2)
        alert('borrado exitoso')

      } catch (e) {
        alert(e)
      }
    }
      
  }
}
</script>

<style>

</style>