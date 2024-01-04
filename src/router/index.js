import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue';
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

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
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: ()=>import('@/views/Detail/index.vue')
        },
        {
          path: 'cartList',
          component: ()=>import('@/views/CartList/index.vue')
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: ()=>import('@/views/Checkout/index.vue')
        },
        {
          path: 'pay',
          name: 'pay',
          component: ()=>import('@/views/Pay/index.vue')
        },
        {
          path: 'paycallback',
          name: 'paycallback',
          component: ()=>import('@/views/Pay/PayBack.vue')
        },
        {
          path: 'member',
          name: 'member',
          component: ()=>import('@/views/Member/index.vue'),
          children: [
            {
              path: '',
              name: 'userinfo',
              component: ()=>import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: 'order',
              name: 'userorder',
              component: ()=>import('@/views/Member/components/UserOrder.vue')
            }
          ]
        }
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
  ],
  // 路由滚动行为定制
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
