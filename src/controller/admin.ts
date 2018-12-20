import { Context } from "koa";
import { NextFunction } from "connect";

import AdminModel from '../database/admin'
// import { testHost } from "../utils/utils";

// import * as test1 from 'test1'
// let a = test2.name
// let b = test1

export default class AccountController {
    public name: String;

    public constructor() {
        this.name = 'ProductClass';
    }

    // 新增一条数据
    static async regist(ctx: Context, next: NextFunction) {
        let req = ctx.request;

        console.log(req)
        console.log(req.body)

        // save method！！
        
        try {
            let a = {
                id: 1,
                account: 'account1',
                password: 'au111',
            }
            console.log(a)
            let note = await AdminModel.create(a)
            ctx.status = 200;
            ctx.body = note;
            console.log('存库成功')
        } catch (err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }

    }

}