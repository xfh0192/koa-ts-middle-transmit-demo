// import Koa from 'koa'
import * as Koa from 'koa'
import * as Cors from 'koa2-cors'
import {Server} from 'http'

import router from './router/mobile'

const app: Koa = new Koa()

app.use(Cors());
app.use(router);

app.listen(3000);