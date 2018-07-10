import Router from 'koa-router'
import { NextFunction } from 'connect';
import { Context } from 'koa';
import bodyParser from 'koa-bodyparser'

import ApiTestRouter from './api/test'
import SpecialRouter from './mobile/special'
import ArticleRouter from './mobile/article';

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

        // api部分
        // api/**
        let apiTestRouter: ApiTestRouter = new ApiTestRouter();
        router.use('/api', apiTestRouter.router.routes());

        // mobile页面
        // mobile/**
        let specialRouter: SpecialRouter = new SpecialRouter();
        router.use('/mobile/special', specialRouter.router.routes());

        let articleRouter: ArticleRouter = new ArticleRouter();        
        router.use('/mobile/article', articleRouter.router.routes());
    }

}
