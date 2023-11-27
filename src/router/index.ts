import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/index.vue'
import explore from '@/views/explore.vue'
import information from '@/views/information.vue'

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
      component: explore
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
  ]
})

export default router
