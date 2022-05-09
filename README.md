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
   1. babel缓存
   2. splitChunks
   3. lodash按需引入
   4. css，js压缩
   5. 构建结果压缩
2. css拆分 scss语法 scss全局导入(sass-resources-loader)
3. vue2,vue-router,vuex
4. 移动端适配
   1. postcss-px-to-viewport 无法转化模版的行内样式
   2. <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover">
   3. viewport-fit=cover 网页覆盖整个视口
   4. env() 和 constant() 获取安全区域尺寸
   5. 1px
   
5. es-lint/commitizen
6. CI/CD
7. tailwind-css
8. 深色模式
9.  i18n
10. 高德地图
11. 扫码
