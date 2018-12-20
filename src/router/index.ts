import Router from 'koa-router'
import { NextFunction } from 'connect';
import { Context } from 'koa';
import bodyParser from 'koa-bodyparser'

import ApiTestRouter from './api/test'
import SpecialRouter from './mobile/special'
import ArticleRouter from './mobile/article';
import NoteRouter from './api/note';
import ListRouter from './api/list';
import ProductRouter from './api/product';
import OrderRouter from './api/order';
import AdminRouter from './api/admin';

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

        /* 
        *  api部分
        *  api/**
        */
        let apiTestRouter: ApiTestRouter = new ApiTestRouter();
        router.use('/api/test', apiTestRouter.router.routes());

        let noteRouter: NoteRouter = new NoteRouter();
        router.use('/api/note', noteRouter.router.routes());

        let listRouter: ListRouter = new ListRouter();
        router.use('/api/list', listRouter.router.routes());

        let productRouter: ProductRouter = new ProductRouter();
        router.use('/api/product', productRouter.router.routes());

        let orderRouter: OrderRouter = new OrderRouter();
        router.use('/api/order', orderRouter.router.routes());
        
        /**
         * admin部分
         */
        let adminRouter: AdminRouter = new AdminRouter();
        router.use('/api/admin', adminRouter.router.routes());

        /* 
        *  mobile页面
        *  mobile/**
        */
        // 专题
        let specialRouter: SpecialRouter = new SpecialRouter();
        router.use('/mobile/special', specialRouter.router.routes());

        // 资讯
        let articleRouter: ArticleRouter = new ArticleRouter();        
        router.use('/mobile/article', articleRouter.router.routes());

    }

}
