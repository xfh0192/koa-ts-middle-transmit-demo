import * as fs from 'fs'
import * as path from 'path'
import * as qs from 'qs'

import rp from 'request-promise'

import {Context} from 'koa'
import {NextFunction} from 'connect'
import { Stream } from 'stream';


export default class MobileSpecialController {

    public name: String;

    public constructor() {
        this.name = 'a'
    }

    // 静态属性
    static async init(ctx: Context, next: NextFunction) {
        let req = ctx.request;
        let rpRes:string = '';
        let rpResJson;
        
        try {
            rpRes = await rp({
                method: 'POST',
                // json: true,
                // body: req.body,
                formData: {
                    id: req.body.id || 1366
                }, 
                uri: 'https://testshop.linghit.com/index.php?s=shop&c=special&a=shopSpecialDetail'
            })

        } catch(e) {
            console.log(e)
        }

        // console.log(JSON.parse(rpRes))
        rpResJson = JSON.parse(rpRes);
        console.log(rpResJson.data.title, rpResJson.data.keywords)

        ctx.status = 200;
        ctx.type = 'html';  // 让浏览器作为html打开
        // ctx.body = fs.createReadStream(path.resolve('src/view/mobile/special-view.html'))
        // ctx.render('h1 #{title}, and #{keyword}', {title: 'title', keyword: '关键词'}, {fromString: true})
        // ctx.render('mobile/special-view.pug', {title: 'title', keyword: 'key'})
        let data = fs.readFileSync(path.resolve(__dirname, '../view/mobile/special-view.html')).toString()
        ctx.render(data, {title: rpResJson.data.title, keyword: rpResJson.data.keywords}, {fromString: true})

        next()
    }

    // 获取专题内容
    static async getSpecialViewData(ctx: Context, next: NextFunction) {
        let req = ctx.request;
        let rpRes:string = '';

        try {
            rpRes = await rp({
                method: 'POST',
                // json: true,
                // body: req.body,
                formData: {
                    id: req.body.id
                }, 
                uri: 'https://testshop.linghit.com/index.php?s=shop&c=special&a=shopSpecialDetail'
            })

        } catch(e) {
            console.log(e)
        }

        // console.log(JSON.parse(rpRes))

        ctx.status = 200;
        // ctx.body = {
        //     message: 'special view post',
        //     body: {
        //         id: 233,
        //         arr: [1,2,3,4],
        //         code: JSON.parse(rpRes).msg
        //     }
        // }
        ctx.body = rpRes     // 直接将结果返回，直接就是json
        next()
    }

}