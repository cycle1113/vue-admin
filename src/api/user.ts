/**
 * 用户相关的请求模块
 */
import request from '../utlis/request'

export const gettoken = () => {
  return request({
    method: 'POST',
    url: '/admin/login',
    data: {
      username: 'admin',
      password: '123456'
    }
  })
}
