import Vue from 'vue'
import App from './App.vue'
import index from './store/index.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Juego from './components/Juego.vue'
import Ranking from './components/Ranking.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Usuario from './components/Usuario.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {path:'/juego',component:Juego},
  {path:'/ranking',component:Ranking},
  {path:'/home',component:Home},
  {path:'/login',component:Login},
  {path:'/usuario',component:Usuario}
]

import Router from 'vue-router'
Vue.use(Router) 
const router = new Router({
  routes,
  mode: 'hash'
})

Vue.config.productionTip = false

new Vue({
  index,
  router,
  render: h => h(App),
}).$mount('#app')
