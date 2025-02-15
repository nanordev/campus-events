import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/signin', name: 'signin', component: import('../views/SigninView.vue') },
    { path: '/signup', name: 'signup', component: import('../views/SignupView.vue') },
    { path: '/create-event', name: 'create-event', component: import('../views/CreateEvent.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: import('../views/PageNotFound.vue')
    }
  ]
})

export default router
