import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Alunos from '../views/Alunos.vue'
import Stats from '../views/Stats.vue'
import Materia from '../views/Materia.vue'
import Dashboard from '../views/Dashboard.vue'
import Histograma from '../views/Histograma.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/materia',
    name: 'Materia',
    component: Materia
  },
  {
    path: '/alunos',
    name: 'Alunos',
    component: Alunos
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/histograma',
    name: 'Histograma',
    component: Histograma
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
