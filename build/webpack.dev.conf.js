'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'webpack_vue2_template'
    })
  ],
  devServer: {
    port: 8888,
    open: true
  }
})

module.exports = new Promise((resolve,reject) => {
  resolve(devWebpackConfig)
})
