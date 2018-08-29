const path = require('path')
const Koa = require('koa')
const static = require('koa-static-cache')
const proxy = require('koa-proxies')
const app = new Koa()
app.use(proxy('/api/*', {
  target: 'http://120.237.31.12:8327/',    
  changeOrigin: true
}))
app.use(static(path.resolve(__dirname, 'dist')))

app.listen(4000);