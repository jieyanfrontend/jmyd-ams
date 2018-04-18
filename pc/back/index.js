let koa = require('koa');
let Router = require('koa-router');
let static = require('koa-static');
let {resolve } = require('path');
let app = new koa();
app.use(static(resolve(__dirname, '../dist')));
app.listen(8090);