<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeProduct></HomeProduct>
  <!-- 测试面板组件
  <HomePanel >
  </HomePanel>  
  <HomePanel>
  </HomePanel>   -->
</template>

<script setup>
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
import HomePanel from "./components/HomePanel.vue";
</script>

<style lang="scss" scoped>

</style>