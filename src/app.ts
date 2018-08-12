import * as https from 'https'
import * as path from 'path'
import * as fs from 'fs'
import Koa from 'koa'
import Cors from 'koa2-cors'
import * as Router from 'koa-router'
let Pug = require('koa-pug')    // 声明文件貌似有问题，直接require
// import Pug from 'koa-pug'
import ErrorHandler from './plugin/error-handler'

import BaseRouterClass from './router/index'

const app: Koa = new Koa()

// 渲染引擎
const pug = new Pug({
    viewPath: './src/view'
})
pug.use(app)

// 路由
const baseRouterInstance: BaseRouterClass = new BaseRouterClass();
app.use(baseRouterInstance.router.routes());

// cors
app.use(Cors());

// 错误处理
app.on('error', (err: Error, ctx) => {
    ErrorHandler.log(err);
})

app.listen(4000);

// // let options = {
// //     key: fs.readFileSync(path.join(__dirname, '../server.key'), 'utf8'),
// //     cert: fs.readFileSync(path.join(__dirname, '../server.crt'), 'utf8')
// // }
// // https.createServer(options, app.callback()).listen(3000);


