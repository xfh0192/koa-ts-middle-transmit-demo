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
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const mobile_special_1 = __importDefault(require("../../controller/mobile-special"));
class SpecialViewRouter extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        router.use(koa_bodyparser_1.default());
        // mobile/
        router.get('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            ctx.status = 200;
            ctx.body = 'this is mobile/';
            next();
        }));
        // 获取html
        // mobile/special-view
        router.get('/view.html', mobile_special_1.default.init);
    }
}
exports.default = SpecialViewRouter;
//# sourceMappingURL=special.js.map