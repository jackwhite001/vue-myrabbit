// 封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI } from "@/apis/cart,";
import { findNewCartListAPI } from "@/apis/cart,";
import { delCartAPI } from "@/apis/cart,";
export const useCartStore = defineStore('cart',()=>{
  const userStore = useUserStore()
  const isLogin = computed(()=>userStore.userInfo.token)
  // 1、定义state --cartList
  const cartList = ref([])
  // 2、定义action -- addCart
  const addCart = async (goods)=>{
    const { skuId,count } = goods
    // 添加购物车操作
    if(isLogin.value){
      // 登录后添加接口购物车
      // 1、添加接口购物车      
      await insertCartAPI({skuId,count})
      // 获取最新数据并覆盖本地购物车
      updateNewList()
    }else{
      // 没有登录 添加本地购物车
      // 已添加过 -count+1
      // 没有添加过 - 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId 能不能在cartList中找到，找到了就是添加过
      const item = cartList.value.find((item)=>goods.skuId === item.skuId)
      if(item){
        // 找到了
        item.count++
      }else{
        // 没找到？
        cartList.value.push(goods)
      }
    }
  }
  // 删除购物车数据
  const delCart = async (skuId)=>{
    if(isLogin.value){
      // 登录状态下删除购物车列表
      // 1、调用删除购物车接口
      await delCartAPI([skuId])
      // 获取最新数据并覆盖本地购物车
      updateNewList()
    }else{
      // 思路：
      // 1、找到要删除项目的下标值- splice
      // 2、使用数组的过滤方法 - filter
      // splice删除
      /*     
      const idx = cartList.value.findIndex((item)=>skuId === item.skuId)
      cartList.value.splice(idx,1) 
      */
      // filter过滤删除
      cartList.value = cartList.value.filter((item)=>{
        // console.log(item);
        // if(item.skuId !== skuId){
        //   return item         
        // }
        return item.skuId !== skuId
      })
    }
  }
  // 获取最新购物车列表
  const updateNewList = async () => {
    // 2、调用获取购物车接口
    const res = await findNewCartListAPI()
    // 3、覆盖本地购物车列表
    cartList.value = res.result
  }
  // 单选功能
  const singleCheck = (skuId,selected)=>{
    // 通过skuId找到要修改的一项，然后把它的selected修改
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  // 计算属性
  // 1、总的数量 所有项的count之和
  const allCount = computed(()=>cartList.value.reduce((pre,cur)=>pre + cur.count,0))
  // 2、总价 所有项的count * price之和
  const allPrice = computed(()=>cartList.value.reduce((pre,cur)=>pre + cur.count * cur.price,0))
  // 3、已选商品数量计算选中商品的数量 
  const selectedCount = computed(()=>cartList.value.filter((item)=>item.selected).reduce((pre,cur)=>pre + cur.count,0))
  // 4、已选商品的总价格
  const selectedPrice = computed(()=>cartList.value.filter((item)=>item.selected).reduce((pre,cur)=>pre + cur.count * cur.price,0))

  // 全选框 将所有的 selected 状态都变为 true
  const allCheck = (selected)=>{
   return cartList.value.filter((item)=>item.selected = selected)
  }
  // 单选框操作 selected  只要有一项不为true 全选状态消失
  const isAll = computed(()=>cartList.value.every((item)=> item.selected))
  
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    selectedCount,
    selectedPrice,
    singleCheck,
    isAll,
    allCheck
  }
},{
  persist: true,
})