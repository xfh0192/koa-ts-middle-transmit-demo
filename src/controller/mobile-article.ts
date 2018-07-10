import { Context } from "koa";
import { NextFunction } from "express-serve-static-core";
import fs from 'fs'
import path from 'path'
import rp from 'request-promise'
import { Domain } from "domain";

export default class ArticleListController {
    public name: string;
    
    constructor() {
        this.name = 'article-list';
    }

    public static async init(ctx: Context, next: NextFunction) {
        let rpRes: string;
        let rpResJson;

        try {
            rpRes = await rp({
                method: 'POST',
                uri: 'https://testshop.linghit.com/index.php?s=shop&c=ApiArticle&a=articleList',
                formData: {
                    page: 1
                }
            })

            rpResJson = JSON.parse(rpRes);
            // console.log(rpResJson.data)
            var getCookie = ctx.cookies.get('testCookie');
            console.log(getCookie || 'no cookie get');

            ctx.status = 200;
            ctx.type = 'html';
            ctx.cookies.set('testCookie', 'koacookie')
            let data = fs.readFileSync(path.resolve(__dirname, '../view/mobile/article-list.html')).toString()            
            ctx.render(data, {title: '资讯列表333'}, {fromString: true})

            next();

        } catch(e) {
            console.log(e)
            next()
        }
    }

    public static async getArticleList(ctx: Context, next: NextFunction) {
        let rpRes;
        let rpResJson;

        try {
            rpRes = await rp({
                method: 'POST',
                uri: 'http://testshop.linghit.com/index.php?s=shop&c=ApiArticle&a=articleList',
                formData: {
                    page: 1
                }
            })

            var getCookie = ctx.cookies.get('koa');
            console.log(getCookie || 'no cookie get')

            ctx.status = 200;
            ctx.cookies.set('koa', 'koa');
            ctx.body = rpRes
            next()

        } catch(e) {
            console.log(e)
            next()
        }
    }
}