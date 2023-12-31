import { getCategoryAPI } from '@/apis/category';
import { onBeforeRouteUpdate,useRoute } from "vue-router"
import { onMounted,ref } from "vue"

// 封装分类数据的相关代码
export function useCategory(){
  const categoryData = ref({})
  const route = useRoute()
  // console.log(route.params.id);
  const getCategory = async (id = route.params.id)=>{
    const res = await getCategoryAPI(id)
    // console.log(res.result);  
    categoryData.value = res.result
  }
  onMounted(()=>getCategory())
  // 目标：路由参数发生变化的时候，可以吧分类数据接口重新发送
  onBeforeRouteUpdate((to,from)=>{
    // console.log(to);
    // 存在问题，使用最新的路由参数，请求最新的分类数据
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}


