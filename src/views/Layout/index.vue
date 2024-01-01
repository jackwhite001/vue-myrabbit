<template>
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key 破坏复用机制 强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <!-- <Home></Home> -->
  <RouterView />
  <LayoutFooter />
  <LayoutFixed></LayoutFixed>
</template>

<script setup>
//导入板块组件
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import Home from '@/views/Home/index.vue'
// 触发获取导航列表的 action 
import { useCategoryStore } from '@/stores/category'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

// const { categoryList } = categoryStore()
// const { getCategory } = storeToRefs(categoryStore())
onMounted(()=>categoryStore.getCategory())
</script>

<style lang="scss" scoped>

</style>