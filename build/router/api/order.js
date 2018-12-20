"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const order_1 = __importDefault(require("../../controller/order"));
class OrderRouter extends koa_router_1.default {
    constructor() {
        super();
        let router = new koa_router_1.default();
        this.router = router;
        this.init();
    }
    init() {
        let router = this.router;
        // 新增一张订单
        router.post('/add', order_1.default.add);
        // 支付订单
        router.post('/pay', order_1.default.pay);
    }
}
exports.default = OrderRouter;
//# sourceMappingURL=order.js.map