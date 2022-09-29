'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const { VueLoaderPlugin } = require('vue-loader')
const vueLoaderConfig = require('./vue-loader.conf')
const ESLintPlugin = require('eslint-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   options: {
      //     cacheDirectory: false // 启用缓存
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: 'swc-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: utils.assetsPath('img/[name].[hash:8][ext]')
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('fonts/[name].[hash:8][ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('media/[name].[hash:8][ext]')
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), ...(config.dev.useEslint ? [new ESLintPlugin()] : [])]
}
