// import Koa from 'koa'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import {Server} from 'http'

const app: Koa = new Koa()
const router: Router = new Router();

// app.use(async ctx => {
//     ctx.body = 2213;
// })
router.get('/', async (ctx, next) => {
    ctx.status = 200;
    ctx.body = 'aa111a';
    next();
})

router.use(async(ctx, next) => {
    console.log('a req');
    next();
})

app.use(router.routes()).listen(3000);