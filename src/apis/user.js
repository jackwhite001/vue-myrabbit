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
// 猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}