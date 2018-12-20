import Router from "koa-router";

import rp from 'request-promise'

import ListController from '../../controller/list'

export default class ListRouter extends Router {

    public router: Router;
    
    constructor() {
        super();
        this.router = new Router();
        this.init();
    }
    
    protected init() {

        let router = this.router;

        // 新增一条list
        router.post('/add', ListController.add)

        // 获取一条/所有list
        router.get('/get', ListController.get)

        // 更新一条list
        router.post('/update', ListController.update)
    }
    
}