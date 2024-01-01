// import './assets/main.css'
//浏览器默认捕获错误 
import 'default-passive-events'
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
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
// pinia 注册持久化数据插件
pinia.use(piniaPluginPersistedstate)
app.use(ElementPlus) //插件式全局注册
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

