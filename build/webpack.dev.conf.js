'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const portfinder = require('portfinder')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  //stats 选项让你更精确地控制 bundle 信息该怎么显示 https://webpack.docschina.org/configuration/stats/
  stats: 'summary',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  // these devServer options should be customized in /config/index.js
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    proxy: config.dev.proxyTable,
    // 浏览器控制台信息控制
    client: {
      // progress: true, // 浏览器编译进度显示
      logging: 'none', // 关闭浏览器控制台的信息
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: resolve('favicon.ico'),
      title: 'webpack_vue2_template',
      templateParameters: {
        BASE_URL: config.dev.assetsPublicPath + config.dev.assetsSubDirectory,
      },
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      resolve(devWebpackConfig)
    }
  })
})

