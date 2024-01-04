// 封装订单支付相关方法
import request from "@/utils/http"

export const getOrderAPI = (id)=>{
  return request({
    url: `/member/order/${id}`, 
  })
}