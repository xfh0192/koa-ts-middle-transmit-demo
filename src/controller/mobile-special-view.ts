import * as fs from 'fs'
import * as path from 'path'
import * as qs from 'qs'

import rp from 'request-promise'

import {Context} from 'koa'
import {NextFunction} from 'connect'


export default class MobileSpecialViewController {

    public name: String;

    public constructor() {
        this.name = 'a'
    }

    // 静态属性
    static async init(ctx: Context, next: NextFunction) {

            ctx.status = 200;
            ctx.type = 'html';  // 让浏览器作为html打开
            ctx.body = fs.createReadStream(path.resolve('src/view/mobile/special-view.html'))
            next()
    }

    // 获取专题内容
    static async getSpecialView(ctx: Context, next: NextFunction) {
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