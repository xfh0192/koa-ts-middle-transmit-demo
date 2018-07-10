import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import * as path from 'path'
import * as fs from 'fs'

import { Context } from 'koa'
import { NextFunction } from 'connect'

import MobileSpecialController from '../../controller/mobile-special'


export default class SpecialViewRouter extends Router {

    public router: Router;

    constructor() {
        super();
        this.router = new Router();
        this.init();
    }

    protected init() {
        
        let router = this.router;
        
        router.use(bodyParser());

        // mobile/
        router.get('/', async (ctx: Context, next: NextFunction) => {
            ctx.status = 200;
            ctx.body = 'this is mobile/'
            next();
        })

        // 获取html
        // mobile/special-view
        router.get('/view.html', MobileSpecialController.init)

    }
}