module.exports = {
  // configureWebpack: (config) => {
  //   devServer: {
  //     // 设置端口
  //      port: 3001,
  //      // 自动打开
  //      open: true
  //    }
  // }
  configureWebpack: {
    devServer: {
      port: 3001
      // 自动打开
      // open: true
    },
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
