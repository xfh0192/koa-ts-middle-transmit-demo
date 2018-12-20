"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const product_1 = __importDefault(require("../../controller/product"));
class ProductRouter extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        // 新增一条note
        router.post('/add', product_1.default.add);
        // 获取一条/所有note
        router.get('/get', product_1.default.get);
        // 更新一条note
        router.post('/update', product_1.default.update);
    }
}
exports.default = ProductRouter;
//# sourceMappingURL=product.js.map