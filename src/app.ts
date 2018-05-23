// import Koa from 'koa'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import {Server} from 'http'

import router from './router/mobile'

const app: Koa = new Koa()

app.use(router).listen(3000);