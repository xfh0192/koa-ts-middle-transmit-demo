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
const test_1 = __importDefault(require("./api/test"));
const special_1 = __importDefault(require("./mobile/special"));
const article_1 = __importDefault(require("./mobile/article"));
const note_1 = __importDefault(require("./api/note"));
const list_1 = __importDefault(require("./api/list"));
const product_1 = __importDefault(require("./api/product"));
const order_1 = __importDefault(require("./api/order"));
const admin_1 = __importDefault(require("./api/admin"));
class BaseRouterClass extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        router.use(koa_bodyparser_1.default());
        router.get('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            ctx.status = 200;
            ctx.body = 'aa111a';
            next();
        }));
        // 分发router
        /*
        *  api部分
        *  api/**
        */
        let apiTestRouter = new test_1.default();
        router.use('/api/test', apiTestRouter.router.routes());
        let noteRouter = new note_1.default();
        router.use('/api/note', noteRouter.router.routes());
        let listRouter = new list_1.default();
        router.use('/api/list', listRouter.router.routes());
        let productRouter = new product_1.default();
        router.use('/api/product', productRouter.router.routes());
        let orderRouter = new order_1.default();
        router.use('/api/order', orderRouter.router.routes());
        /**
         * admin部分
         */
        let adminRouter = new admin_1.default();
        router.use('/api/admin', adminRouter.router.routes());
        /*
        *  mobile页面
        *  mobile/**
        */
        // 专题
        let specialRouter = new special_1.default();
        router.use('/mobile/special', specialRouter.router.routes());
        // 资讯
        let articleRouter = new article_1.default();
        router.use('/mobile/article', articleRouter.router.routes());
    }
}
exports.default = BaseRouterClass;
//# sourceMappingURL=index.js.map