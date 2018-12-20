import Router from "koa-router";

import rp from 'request-promise'

import NoteController from '../../controller/note'

export default class NoteRouter extends Router {

    public router: Router;
    
    constructor() {
        super();
        this.router = new Router();
        this.init();
    }
    
    protected init() {

        let router = this.router;

        // 新增一条note
        router.post('/add', NoteController.add)

        // 获取一条/所有note
        router.get('/get', NoteController.get)

        // 更新一条note
        router.post('/update', NoteController.update)
    }
    
}