// 封装倒计时逻辑函数
import dayjs from "dayjs"
import duration from 'dayjs/plugin/duration';
import { computed,onUnmounted,ref } from "vue";

export const useCountDown = ()=>{
  // 设置定时器timer
  let timer = null
  // 1、响应式数据
  const time = ref(0)
  // 格式化时间为 xx分xx秒Unix 时间戳 (毫秒)
  const formatTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  // 2、开启倒计时函数
  const start = (currentTime)=>{
    // 开启倒计时的逻辑
    // 核心逻辑的编写 每隔1s 减一
    time.value = currentTime
    timer = setInterval(() => { // = 返回定时器id
      time.value--
    }, 1000);
    // console.log(timer);    
  }

  // 组件销毁时清除定时器
  onUnmounted(()=>{
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}