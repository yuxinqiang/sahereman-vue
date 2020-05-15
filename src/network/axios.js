// axios封装
import axios from 'axios'

// 创建axios实例
const serviceRequset = axios.create({
  // 设置超时时间
  timeout: 5000,
  // 设置请求的基本路径
  // baseURL: process.env.BASE_URL
  baseURL: 'http://localhost:3001'
})

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 *  */
let loading = null
serviceRequset.interceptors.request.use(config => {
  // 请求成功
  const token = localStorage.getItem('token')
  // 根据接口是否需要token登陆验证决定是否保留
  if (token) {
    config.headers.Authorization = token
  }
  // 可以在此处设置请求时的loading动画
  loading = '正在进行数据请求'
  console.log(config)
  return config
}, err => {
  // 请求失败,返回错误信息
  console.log(err)
  return Promise.reject(err)
})

// 响应后拦截
serviceRequset.interceptors.response.use(response => {
  console.log(response)
  // 请求后关闭loading动画
  if (loading) {
    loading = '请求结束关闭loading动画'
  }
  // 根据实际情况定义变量值
  const responseCode = response.status
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (responseCode === 200) {
    // 两种写法貌似皆可（待验证）
    // 1、 return response
    return Promise.resolve(response)
  } else {
    console.log(response)
    return Promise.reject(response)
  }
}, err => {
  // 断网或者请求超时状态
  if (!err.response) {
    // 请求超时
    if (err.message.include('timeout')) {
      console.log('请求超时')
    } else {
      console.log('断网了')
    }
  }
  // 服务器返回不是2开头的情况，则进入失败情况判断
  // 根据接口返回的错误状态码进行不同的错误情况处理
  console.log(err)
  // 根据实际情况定义变量值
  const responseCode = err.response.status
  switch (responseCode) {
    // 401：未登录
    case 401:
      // 跳转到登陆页
      break
    // 404：请求不存在
    case 404:
      // 提示网页不存在
      break
    default:
      // 其他错误，直接抛出错误提示
      break
  }
  if (loading) {
    loading = '请求结束关闭loading动画'
  }
  // 抛出错误
  console.log(err)
  return Promise.reject(err)
})

export default serviceRequset
