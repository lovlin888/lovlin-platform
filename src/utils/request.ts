import axios from 'axios'
import {message} from "antd";

// 创建 axios 实例
const service = axios.create({
  // api base_url
  timeout: 30000, // 请求超时时间
})

const err = (error: any) => {
  if (error.response) {
    message.error(error.response.data.message)
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers['token'] = localStorage.getItem('token')
  }

  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)

export { service as axios }
