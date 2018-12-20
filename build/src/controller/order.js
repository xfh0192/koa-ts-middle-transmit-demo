"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("../database/order"));
class OrderController {
    constructor() { }
    static add(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            console.log(JSON.parse(req.body.productIds));
            try {
                // 生成订单号
                let orderId = 'DD' + new Date().getTime();
                let orderData = {
                    id: orderId,
                    productIds: JSON.parse(req.body.productIds),
                    // productIds: ['123'],
                    status: 0,
                };
                yield order_1.default.create(orderData);
                ctx.status = 200;
                ctx.body = orderData;
                console.log('下单成功');
            }
            catch (err) {
                ctx.message = '出错了';
                ctx.status = 503;
                throw new Error(err);
            }
        });
    }
    static pay(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            try {
                let orderId = req.body.orderId;
                console.log(orderId);
                yield order_1.default.findOneAndUpdate({
                    id: orderId
                }, {
                    status: 1
                });
                ctx.status = 200;
                ctx.body = {
                    message: '支付成功'
                };
                console.log('支付成功');
            }
            catch (err) {
                ctx.message = '出错了';
                ctx.status = 503;
                throw new Error(err);
            }
        });
    }
}
exports.default = OrderController;
//# sourceMappingURL=order.js.map