import * as Router from 'koa-router'
import { NextFunction } from 'connect';
import { Context } from 'koa';

import specialRes from '../controller/mobile-special-view'

const router: Router = new Router();

// router.get('/', async (ctx: Context, next: NextFunction)=> {
//     ctx.status = 200;
//     ctx.body = 'aa111a';
//     next();
// })

router.get('/', specialRes);

router.use(async(ctx, next) => {
    console.log('a req');
    next();
})

export default router.routes();