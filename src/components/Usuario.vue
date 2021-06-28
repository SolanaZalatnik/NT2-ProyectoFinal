<template>
  <div>
    <h1>Usuario</h1>
    <div>
      <button type="button" style="margin: 5px;" class="btn btn-dark" @click="getUsuarios()">Traer usuarios</button>
      <button type="button" style="margin: 5px;" class="btn btn-dark" @click="saveUsuario()">Guardar usuario</button>
      <button type="button" style="margin: 5px;" class="btn btn-dark" @click="deleteUsuario()">Eliminar usuario</button>
      <button type="button" style="margin: 5px;" class="btn btn-dark" @click="mostrarUsuario()">Ver mi usuario</button>
    </div>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">{{usuario.id + ' ' + usuario.name + ' ' + usuario.pass}}</li>
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
    },
    async getUsuarios(){
      try{
        const response = this.usuarios = await axios.get(this.url)
        this.usuarios = response.data
      }catch(error){
        console.log(error)
      }
    },  
    async saveUsuario(){
      let usuarioName = prompt('Ingresá el nombre de un usuario')
      let usuarioPass = prompt ('Ingresá contraseña')
      if(usuarioName !== null && usuarioPass !== null) {
        const usuario = {
          name: usuarioName,
          pass: usuarioPass,
          points: 0
        }
        const respuesta = await axios.post(this.url, usuario)
        console.log(respuesta)
      }
    },
    async deleteUsuario(){
      const userId = prompt('Ingresá el ID del usuario a eliminar')
      
      try {
        const respuesta2 = await axios.delete(this.url + '/' + userId)
        console.log(respuesta2)
        alert('Borrado exitoso')
      }catch (error){
        alert('Error al eliminarlo')
      }
    },
    mostrarUsuario(){
      this.$store.dispatch('getUsuario')
      if(this.traerUsuario() != '')
        alert("Tu usuario es: " + this.traerUsuario())
      else {
        alert("No estas logueado")
      }
    },
    traerUsuario(){
      return this.$store.getters.getUsuario
    }
      
  }
}
</script>

<style>

</style>