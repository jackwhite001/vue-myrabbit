// import './assets/main.css'
// 引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

/* // 导入测试接口函数
import { getCategory } from '@/apis/testAPI'
getCategory().then(res=>{
  console.log(res);
}) */
// 引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'
const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus) //插件式全局注册
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

