import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import * as path from 'path'
import * as fs from 'fs'

import { Context } from 'koa'
import { NextFunction } from 'connect'

import MobileSpecialViewController from '../../controller/mobile-special-view'


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
        router.get('/special/view.html', MobileSpecialViewController.init)

        // async (ctx: Context, next: NextFunction) => {
            
        //     ctx.status = 200;
        //     ctx.type = 'html';  // 让浏览器作为html打开
        //     ctx.body = fs.createReadStream(path.resolve('src/view/mobile/special-view.html'))
        //     next()
        // }

    }
}