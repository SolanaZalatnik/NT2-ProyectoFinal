<template>
  <div id="app">
    <HelloWorld msg="Header"/>
    <!--
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/home" class="nav-item nav-link">Home</router-link>
        <router-link to="/juego" class="nav-item nav-link">Juego</router-link>
        <router-link to="/ranking" class="nav-item nav-link">Ranking</router-link>
      </div>
    </div>
  </nav>
  -->

   <b-row>
     <b-col>
       <router-link to="/home">Home</router-link>
       <br>
       <router-link to="/juego">Empezar juego</router-link>
       <br>
       <router-link to="/ranking">Ver ranking</router-link>
     </b-col>
     <b-col>
       <router-view></router-view>
     </b-col>
     <b-col></b-col>
   </b-row>
    <hr>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: "App",
  components:{
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
