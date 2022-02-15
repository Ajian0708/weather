module.exports = {
  publicPath: '/weather',
  devServer: {
    //跨域
    proxy: {    //配置跨域
      '/weatherapi': {
        target: 'https://www.metaweather.com',
        ws: true,     // 如果要代理 websockets
        changOrigin: true,  //允許跨域
        pathRewrite: {
          '^/weatherapi': '' //請求的時候使用這個api就可以
        }
      }
    }
  }
};