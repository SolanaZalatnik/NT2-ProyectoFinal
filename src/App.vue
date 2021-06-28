<template>
  <div id="app">
    
    <header>
        <div class="logo">
            <img src="../public/iconoHeader.png" style="width:90px; height:90px;">
        </div>
        <b-row>
          <b-col>
            <router-link to="/Home"  active-class="active" exact>Home</router-link>
          </b-col>
          <b-col>
           <router-link to="/Login"  active-class="active" exact>Login</router-link>
          </b-col>
          <b-col>
           <router-link to="/Ranking" active-class="active" exact>Ranking</router-link>
          </b-col>
          <b-col>
            <router-link to="/Usuario"  active-class="active" exact>Usuario</router-link>
          </b-col>
        </b-row>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
    }
  },
  components:{
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #eccc68;
}

#app {
  background-color: #eccc68;
  font-family: "Recursive", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li, a {
  font-family: system-ui, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #8B4513;
  text-decoration: none;
}

ol li{
  list-style-type: none;
}

header {
  display: flex;
  justify-content: flex-end;
  background-color: #2f3542;
  align-items: center;
  padding: 25px 10%;
}

.logo {
  color: #eccc68;
  margin-right: auto;
}

.nav-link li {
  cursor: pointer;
  display: inline-block;
  padding: 0px 20px;
}

.nav-link li a {
  transition: all .5 ease;
}

.nav-link li a:hover {
  color: #f1f2f6;
}

</style>
