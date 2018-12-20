import { Context } from "koa";
import OrderModel from "../database/order";

export default class OrderController {
    constructor() {}

    static async add(ctx: Context) {
        let req = ctx.request;

        console.log(JSON.parse(req.body.productIds))

        try {
            // 生成订单号
            let orderId: string = 'DD' + new Date().getTime();
            let orderData: Order.OrderInterface = {
                id: orderId,
                productIds: JSON.parse(req.body.productIds),
                // productIds: ['123'],
                status: 0,      // 订单状态： 0 未支付；1 已支付 
            }

            await OrderModel.create(orderData)
            ctx.status = 200;
            ctx.body = orderData;
            console.log('下单成功')
            
        } catch(err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }
    }

    static async pay(ctx: Context) {
        let req = ctx.request;

        try {
            let orderId = req.body.orderId;
            console.log(orderId)

            await OrderModel.findOneAndUpdate({
                id: orderId
            }, {
                status: 1
            })
            ctx.status = 200;
            ctx.body = {
                message: '支付成功'
            };
            console.log('支付成功')

        } catch(err) {
            ctx.message = '出错了';
            ctx.status = 503;
            throw new Error(err);
        }
    }
}