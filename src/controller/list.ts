import { Context } from "koa";
import { NextFunction } from "connect";

import ListModel from '../database/list'
import { URL } from "url";
import { testHost } from "../utils/utils";

export default class ListController {
    public name: String;

    public constructor() {
        this.name = 'ListClass';
    }

    static async add(ctx: Context, next: NextFunction) {
        let req = ctx.request;
        let title = req.body.title;
        let content = req.body.content;

        console.log(req)
        console.log(req.body)

        // save method！！
        
        try {
            let a = {
                tag: 'tag',
                title: title, 
                content: content,
                author: 'au',
            }
            console.log(a)
            let list = await ListModel.create(a)
            console.log(list)
            ctx.status = 200;
            ctx.body = list;
            console.log('存库成功')
        } catch (err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }

    }

    static async get(ctx: Context) {
        let req = ctx.request;
        let getUrl = new URL(`${testHost + req.url}`);
        let id = getUrl.searchParams.get('id');
        let list;

        try {
            if (id) {
                // 有id获取单条
                list = await ListModel.findById(id).exec()
            } else {
                // 没有id获取全部
                list = await ListModel.find().exec()
            }

            ctx.status = 200;
            ctx.body = list
            // console.log('list done in')
            
        } catch (err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }
            
    }

    static async update(ctx: Context, next: NextFunction) {
        let req = ctx.request;
        let id = req.body.id;
        let content = req.body.content || '';

        console.log('content: ', content)
        let list;

        try {
            list = await ListModel.findByIdAndUpdate(id, {
                title: 'he',
                content: content
            }, {
                new: true
            }).exec()

            console.log('updated')
            console.log('===============')
            console.log(list)
            console.log('===============')
            
            ctx.status = 200;
            ctx.body = list;

        } catch (err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }

        next();
    }
}