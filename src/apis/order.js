// 封装个人中心获取订单接口
import request from "@/utils/http"
export const getUserOrder = (params) => {
  return request({
    url:'/member/order',
    method:'GET',
    params
  })
}