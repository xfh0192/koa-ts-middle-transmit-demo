"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const admin_1 = __importDefault(require("../../controller/admin"));
class AdminRouter extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        // 新增一条note
        router.post('/regist', admin_1.default.regist);
    }
}
exports.default = AdminRouter;
//# sourceMappingURL=account.js.map