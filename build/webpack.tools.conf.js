const path = require('path')
const Plugin1 = require('./plugins/plugin1.js')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'loader1.js'
          },
          {
            loader: 'pkg2'
          },
          {
            loader: 'pkg1'
          }
        ]
      }
    ]
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, 'loaders')]
  },
  plugins: [
    new Plugin1()
  ],
}