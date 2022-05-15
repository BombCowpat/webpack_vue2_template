module.exports = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  // 因为只有请求devServer(http://localhost:9527)的请求才会被devServer收到，其他域名或者端口的请求devServer是收不到的
  // BASE_API: '"http://localhost:3000/api"' // 协议域名端口和路径栏不一样的请求不会被转发，而是被直接发往服务器，需要后端进行跨域处理，如cors
  // BASE_API: '"http://localhost:9527/api"' // 如果带上协议域名端口等信息，需要和当前页面路径栏的保持一致
  // BASE_API: '"/"' // 以'/'开头的请求也可以被转发 'http://localhost:9527/'
  BASE_API: '"/api"' // 'http://localhost:9527/api'
}
