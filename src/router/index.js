import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: () => import('@/layouts/Default'),

      children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/computadores',
        name: 'Computadores',
        component: () => import('../views/Computadores.vue')
      },
      {
        path: '/projetos',
        name: 'Projetos',
        component: () => import('../views/Projetos.vue')
      },
      {
        path: '/perfil',
        name: 'Perfil',
        component: () => import('../views/Perfil.vue')
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    }
   ]
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
