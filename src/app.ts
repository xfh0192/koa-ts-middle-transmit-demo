import * as https from 'https'
import * as path from 'path'
import * as fs from 'fs'
import Koa from 'koa'
import Cors from 'koa2-cors'
import * as Router from 'koa-router'
let Pug = require('koa-pug')
// import Pug from 'koa-pug'

import BaseRouterClass from './router/index'

const app: Koa = new Koa()
const pug = new Pug({
    viewPath: './src/view'
})

pug.use(app)

const baseRouterInstance: BaseRouterClass = new BaseRouterClass();
app.use(baseRouterInstance.router.routes());

app.use(Cors());

app.listen(4000);

// // let options = {
// //     key: fs.readFileSync(path.join(__dirname, '../server.key'), 'utf8'),
// //     cert: fs.readFileSync(path.join(__dirname, '../server.crt'), 'utf8')
// // }
// // https.createServer(options, app.callback()).listen(3000);


