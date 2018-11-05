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
        router.get('/add', NoteController.add)

        // 更新一条note
        router.post('/update', NoteController.update)
    }
    
}