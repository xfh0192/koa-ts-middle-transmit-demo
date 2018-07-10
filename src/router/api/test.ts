import Router from "koa-router";
import bodyParser from 'koa-bodyparser'

import rp from 'request-promise'

import MobileSpecialController from '../../controller/mobile-special'
import ArticleListController from "../../controller/mobile-article";

export default class ApiTestRouter extends Router {
    
    public router: Router;

    public constructor() {
        super();
        this.router = new Router();
        this.init();
    }

    protected init() {

        let router: Router = this.router;

        router.use(bodyParser());

        router.get('/test', async (ctx, next) => {
            ctx.status = 200;
            ctx.body = 'this is api/test'
            next()
        })
        
        router.post('/special/list', async (ctx, next) => {
            let res = {message: 'null'}

            console.log(ctx.request.body)
            try {
                // 发请求获取一下接口数据
                res = await rp({
                    method: 'POST',
                    json: true,
                    uri: 'http://testshop.linghit.com/index.php?s=shop&c=ApiArticle&a=articleList',
                    body: ctx.request.body || {},
                })
            } catch(e) {
                console.log(e)
            }

            ctx.status = 200;
            ctx.body = {
                message: 'this is post special/list',
                body: res || {}
            }

            next()
        })

        router.post('/special/view', MobileSpecialController.getSpecialViewData)
        
        router.post('/article/list', ArticleListController.getArticleList);
    }
}