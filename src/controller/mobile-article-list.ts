import { Context } from "koa";
import { NextFunction } from "express-serve-static-core";

export const articleListController = (ctx: Context, next: NextFunction) => {
    
    ctx.status = 200;
    ctx.body = {
        message: '资讯列表'
    }

}