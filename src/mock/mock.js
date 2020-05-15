// 引入mock。js
import Mock from 'mockjs'
import news from './virtual/news'

Mock.setup({
  timeout: 800
})

Mock.mock('http://localhost:3001/mock/news', 'get', news)

Mock.mock('/api/users', (req, res) =>{ {
      return Mock.mock({
      "user|1-10": [{
              'name': '@cname',
              'id|+1': 1, 
              'age|10-60': 0,    //10-60以内的随机数，0用来确定类型 
              'birthday': '@date("yyyy-MM-dd")',    //年月日
              'city': '@city(true)'    //中国城市
          }]
      })
}})
