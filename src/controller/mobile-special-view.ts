import {Context} from 'koa'
import {NextFunction} from 'connect'

export let specialRes = async (ctx: Context, next: NextFunction) => {
    ctx.status = 200;
    ctx.body = {
        message: '222'
    };
    next();
}

export let specialSeo = async (ctx: Context, next: NextFunction) => {
    ctx.status = 200;
    ctx.body = {
        title: '这是seo标题'
    };
    next();
}