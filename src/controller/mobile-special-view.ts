import {Context} from 'koa'
import {NextFunction} from 'connect'

let specialRes = async (ctx: Context, next: NextFunction) => {
    ctx.status = 200;
    ctx.body = '222';
    next();
}

export default specialRes;
