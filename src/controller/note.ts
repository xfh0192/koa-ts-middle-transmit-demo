import { Context } from "koa";
import { NextFunction } from "connect";

import NoteModel from '../database/index'

export default class NoteController {
    public name: String;

    public constructor() {
        this.name = 'NoteClass';
    }

    static async add(ctx: Context, next: NextFunction) {
        // let req = ctx.request;
        // let res:String = '';

        // save method！！

        NoteModel.create({title: 'first note'}, (err:any) => {
            console.log('add2')
            if (err) {
                console.log(err)
            }

            console.log('存库成功')
        })

        // or

        // let noteInstance = new noteModel({title: 'second note'})
        // noteInstance.save((err:any) => {
        //     console.log('add2')
        //     if (err) {
        //         console.log(err)
        //     }

        //     console.log('存库成功')
        // })

    }

    static async update(ctx: Context, next: NextFunction) {
        let req = ctx.request;

        console.log('======')
        console.log(req)
        console.log('body')
        console.log(req.body)
        console.log('======')
        console.log('======')
        console.log('updated')

        ctx.status = 200;
        ctx.body = {
            msg: 'ok'
        }

    }
}