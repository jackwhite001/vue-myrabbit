import request from '@/utils/http'
// 封装用户请求接口

export const loginAPI = ({account,password})=>{
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}