import { Context } from "koa";
import { NextFunction } from "connect";

import NoteModel from '../database/note'
import { URL } from "url";
import { testHost } from "../utils/utils";

// import * as test1 from 'test1'
// let a = test2.name
// let b = test1

export default class NoteController {
    public name: String;

    public constructor() {
        this.name = 'NoteClass';
    }

    // 新增一条数据
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
            // console.log(a)
            let note = await NoteModel.create(a)
            // console.log(note)
            ctx.status = 200;
            ctx.body = note;
            console.log('存库成功')
        } catch (err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }

    }

    // 根据id，获取一条/全部数据
    static async get(ctx: Context) {
        let req = ctx.request;
        let getUrl = new URL(`${testHost + req.url}`);
        let id = getUrl.searchParams.get('id');
        let note;

        try {
            if (id) {
                // 有id获取单条
                note = await NoteModel.findById(id).exec()
            } else {
                // 没有id获取全部
                note = await NoteModel.find().exec()
            }

            ctx.status = 200;
            ctx.body = note
            // console.log('note done in')
            
        } catch (err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }
            
    }

    // 更新一条数据
    static async update(ctx: Context, next: NextFunction) {
        let req = ctx.request;
        let id = req.body.id;
        let content = req.body.content || '';

        console.log('content: ', content)
        let note;

        try {
            note = await NoteModel.findByIdAndUpdate(id, {
                title: 'he',
                content: content
            }, {
                new: true
            }).exec()

            console.log('updated')
            console.log('===============')
            console.log(note)
            console.log('===============')
            
            ctx.status = 200;
            ctx.body = note;

        } catch (err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }

        next();
    }
}