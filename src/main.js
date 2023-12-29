import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// 导入测试接口函数
import { getCategory } from '@/apis/testAPI'
getCategory().then(res=>{
  console.log(res);
})
const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus) //插件式全局注册
app.use(pinia)
app.use(router)

app.mount('#app')
