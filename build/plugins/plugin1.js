class Plugin1 {
  apply(compiler) {
    compiler.hooks.emit.tap('Plugin1', (compilation) => {
      console.log('emit.tap')
      debugger
      compilation.hooks.buildModule.tap(
        'Plugin1',
        (module) => {
          console.log('compilation.hooks')
          module.useSourceMap = true;
        }
      )
    })
  }
}

module.exports = Plugin1
