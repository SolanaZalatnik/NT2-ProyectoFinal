import { faUserSecret, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
library.add(faEye)

<template>
  <div id="app">
    
    <div id="banner">
    </div>
    
    <hr />
        <!--<Juego juego="primer juego">-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/home" class="nav-item nav-link" active-class="activate" exact>Home</router-link>
              <router-link to="/juego" class="nav-item nav-link" active-class="activate" exact>Juego</router-link>
              <router-link to="/ranking" class="nav-item nav-link" active-class="activate" exact>Ranking</router-link>
              <router-link to="/loguin" class="nav-item nav-link" active-class="activate" exact>
              <svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#heart-fill"/>
</svg>
</router-link>
              
            </div>
          </div>
        </nav>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
export default {
  name: "App",
  components:{
    //HelloWorld
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
}
#banner{
  background-image: url('./assets/bannerPreguntados.jpg');
  padding-top: 100px;
}
</style>
