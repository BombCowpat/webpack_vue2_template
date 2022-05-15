const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/user', (ctx) => {
  console.log(ctx.host)
  ctx.body = {
    name: 'cyf',
    age: '18'
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
