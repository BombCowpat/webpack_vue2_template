### 自定义loader
#### loader定义
loader是一个接受content，map，meta 三个参数的函数，使用Common JS 的方式向外暴露

#### 使用自定义的loader的三种方式
1. 在配置中通过path.resolve指定loader的文件位置
2. 在resolveLoader中制定解析loader的位置
3. 使用pnpm link 将loader链接到项目的node_modules
   1. 创建package/pkg1文件夹以及index.js
   2. npm init
   3. 在根目录使用pnpm link ./package/pkg1

### tapable
### compiler
### compilation
### 自定义plugin
#### plugin定义
plugin是一个构造函数，或者一个类，类的内部要实现apply方法，接受compiler对象作为参数

### 功能说明
1. webpack5
2. vue2,vue-router,vuex
3. 移动端适配
4. tailwind-css
5. 暗黑模式
6. i18n
7. es-lint
8. 高德地图
9. 扫码
