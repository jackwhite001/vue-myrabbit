// 定义懒加载插件 
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install (app){
  //定义全局指令 
  app.directive('img-lazy',{
    mounted(el,binding){
      // el: 指令绑定的那个元素 img
      // binding: binding.value 指定等于号后面绑定的表达式的值，图片url
      // console.log(el,binding.value);
      const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          console.log(isIntersecting);
          // 判断是否 进入视口区域
          if(isIntersecting){
            // 进入的话将图片的src 传给img-lazy
            el.src = binding.value
            stop()
          }     
        },
      )
      
    }
  })
  }
}