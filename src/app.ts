import * as https from 'https'
import * as path from 'path'
import * as fs from 'fs'
import Koa from 'koa'
import Cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'

let Pug = require('koa-pug')    // 声明文件貌似有问题，直接require
// import Pug from 'koa-pug'
import ErrorHandler from './plugin/error-handler'

import BaseRouterClass from './router/index'

const app: Koa = new Koa()

// 渲染引擎
// const pug = new Pug({
//     viewPath: './src/view'
// })
// pug.use(app)

// bodyparser
app.use(bodyParser())

// 路由
const baseRouterInstance: BaseRouterClass = new BaseRouterClass();
app.use(baseRouterInstance.router.routes());

// cors
app.use(Cors());

// 错误处理
app.on('error', (err: Error, ctx) => {
    ErrorHandler.log(err);
})

// 启动mongodb
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/test')
const connection = mongoose.connection;
connection.on('error', () => {
    console.log('数据库连接失败!!')
})
connection.once('open', () => {
    console.log('数据库连接成功!')
})

// let schema = mongoose.Schema;
// let NoteSchema = new schema({
//     title: String
// })

// let model = mongoose.model('note', NoteSchema);

// model.create({title: 'hihihi111'}, () => {
//     console.log('done')
// })


app.listen(4000);

// // let options = {
// //     key: fs.readFileSync(path.join(__dirname, '../server.key'), 'utf8'),
// //     cert: fs.readFileSync(path.join(__dirname, '../server.crt'), 'utf8')
// // }
// // https.createServer(options, app.callback()).listen(3000);


