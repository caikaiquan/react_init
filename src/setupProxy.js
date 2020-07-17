const Ip = require('ip')
const { createProxyMiddleware } = require('http-proxy-middleware')


const ip = Ip.address();
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: `http://${ip}:3000`,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }))
}
