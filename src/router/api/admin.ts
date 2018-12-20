import Router from "koa-router";

import AdminController from '../../controller/admin'

export default class AdminRouter extends Router {

    public router: Router;
    
    constructor() {
        super();
        this.router = new Router();
        this.init();
    }
    
    protected init() {

        let router = this.router;

        // 新增一条note
        router.post('/regist', AdminController.regist)

    }
    
}