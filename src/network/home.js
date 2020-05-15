import request from './axios'

export function getNews () {
  return request({
    url: 'http://localhost:3001/mock/news',
    method: 'get'
  })
}
