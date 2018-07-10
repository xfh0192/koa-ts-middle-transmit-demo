import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import path from 'path'
import fs from 'fs'
import ArticleController from '../../controller/mobile-article';

export default class ArticleListRouter extends Router {
    public router: Router;

    constructor() {
        super();
        this.router = new Router();
        this.init();
    }

    protected init() {
        let router = this.router;

        router.use(bodyParser());

        router.get('/list.html', ArticleController.init);
    }
}