import { createRouter, createWebHashHistory } from 'vue-router'
import landing from '../views/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Landing.vue'),
  },
  {
    path: '/responsepage',
    name: 'responsepage',
    component: () => import('../views/ResponsePage.vue'),
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/moviedetail/',
    name: 'moviedetail',
    component: () => import('../views/MovieDetails.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
