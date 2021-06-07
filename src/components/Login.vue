<template>
  <div>
    <form class="form-signin" @submit.prevent="submitForm">
      <h1 class="h3 mb-3 font-weight-normal">Inicie sesión</h1>
      <label for="nombre" class="sr-only">Nombre</label>
      <input type="text" v-model="nombre" id="nombre" class="form-control" placeholder="Nombre" required autofocus>
      <label for="password" class="sr-only">Contraseña</label>
      <input type="password" v-model="password" id="password" class="form-control" placeholder="Contraseña" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios'
//import store from '../store/store.js'

export default {
  data () {
    return {
      nombre: null,
      password: null
    }
  },
  methods: {
    async submitForm() {

      let users = await axios.get('https://60b56f2efe923b0017c840c7.mockapi.io/usuarios')
      let arrayUsers = users.data

      let i = 0
      let found = false
      while(i < arrayUsers.length && !found) {
        if(this.nombre == arrayUsers[i].name && 
          this.password == arrayUsers[i].pass) {
          alert('¡Datos verificados correctamente! Bienvenido ' + this.nombre)
          found = true
        } else {
          i++
        }
      }
      if(!found) {
        alert('Datos invalidos. Intente nuevamente')
      } else {
        const obj = {
          nombre: this.nombre,
          password: this.password
        }
        this.$store.dispatch('changeUserData', obj)
        this.$router.push('Home') 
      }
    },
    
  }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>