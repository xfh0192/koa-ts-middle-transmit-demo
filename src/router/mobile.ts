import * as Router from 'koa-router'
import { NextFunction } from 'connect';
import { Context } from 'koa';

import {specialRes, specialSeo} from '../controller/mobile-special-view'

const router: Router = new Router();
const testRouter: Router = new Router();

// router.get('/', async (ctx: Context, next: NextFunction)=> {
//     ctx.status = 200;
//     ctx.body = 'aa111a';
//     next();
// })

testRouter.get('/test/koa', specialRes);
testRouter.get('/test/seo', specialSeo);

router.use(async(ctx, next) => {
    console.log('a req');
    next();
})

router.use('/api', testRouter.routes());

export default router.routes();