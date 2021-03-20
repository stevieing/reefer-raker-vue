// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import BoxesToMove from '@/views/BoxesToMove.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/boxes-to-move',
    name: 'BoxesToMove',
    component: BoxesToMove
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router