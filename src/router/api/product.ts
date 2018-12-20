import Router from "koa-router";

import rp from 'request-promise'

import ProductController from '../../controller/product'

export default class ProductRouter extends Router {

    public router: Router;
    
    constructor() {
        super();
        this.router = new Router();
        this.init();
    }
    
    protected init() {

        let router = this.router;

        // 新增一条note
        router.post('/add', ProductController.add)

        // 获取一条/所有note
        router.get('/get', ProductController.get)

        // 更新一条note
        router.post('/update', ProductController.update)
    }
    
}