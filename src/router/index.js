import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue';
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component相关的设置
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
