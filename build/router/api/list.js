"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const list_1 = __importDefault(require("../../controller/list"));
class ListRouter extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        // 新增一条list
        router.post('/add', list_1.default.add);
        // 获取一条/所有list
        router.get('/get', list_1.default.get);
        // 更新一条list
        router.post('/update', list_1.default.update);
    }
}
exports.default = ListRouter;
//# sourceMappingURL=list.js.map