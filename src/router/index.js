import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BeersApp from '@/views/BeersApp.vue'
import BeerDetails from '@/views/BeerDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/beer',
    component: BeersApp
  },
  {
    path: '/beer/:id',
    component: BeerDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
