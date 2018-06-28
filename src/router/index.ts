import Router from 'koa-router'
import { NextFunction } from 'connect';
import { Context } from 'koa';
import bodyParser from 'koa-bodyparser'

import ApiTestRouter from './api/test'
import SpecialViewRouter from './mobile/special-view'

export default class BaseRouterClass extends Router {

    public router: Router;
    
    public constructor() {
        super();
        this.router = new Router();
        this.init();
    }

    public init() {

        let router = this.router;

        router.use(bodyParser());
        
        router.get('/', async (ctx: Context, next: NextFunction)=> {
            ctx.status = 200;
            ctx.body = 'aa111a';
            next();
        })

        // 分发router

        // mobile页面
        // mobile/**
        let specialViewRouter: SpecialViewRouter = new SpecialViewRouter();
        router.use('/mobile', specialViewRouter.router.routes());

        // api部分
        // api/**
        let apiTestRouter: ApiTestRouter = new ApiTestRouter();
        router.use('/api', apiTestRouter.router.routes());
        
    }

}
