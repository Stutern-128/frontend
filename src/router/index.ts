import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('@/views/explore.vue')
    },
    {
      path: '/information',
      name: 'information',
      component: () => import('@/views/information.vue')
    },
  ]
})

export default router
