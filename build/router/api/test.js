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
const request_promise_1 = __importDefault(require("request-promise"));
const mobile_special_1 = __importDefault(require("../../controller/mobile-special"));
const mobile_article_1 = __importDefault(require("../../controller/mobile-article"));
class ApiTestRouter extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        router.use(koa_bodyparser_1.default());
        // 测试部分
        router.get('/test', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            ctx.status = 200;
            ctx.body = 'this is api/test';
        }));
        // 测试抛出错误记录日志
        router.get('/test/error', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('抛出错误');
        }));
        // special
        router.post('/special/list', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            let res = { message: 'null' };
            console.log(ctx.request.body);
            try {
                // 发请求获取一下接口数据
                res = yield request_promise_1.default({
                    method: 'POST',
                    json: true,
                    uri: 'http://testshop.linghit.com/index.php?s=shop&c=ApiArticle&a=articleList',
                    body: ctx.request.body || {},
                });
            }
            catch (e) {
                console.log(e);
            }
            ctx.status = 200;
            ctx.body = {
                message: 'this is post special/list',
                body: res || {}
            };
            next();
        }));
        router.post('/special/view', mobile_special_1.default.getSpecialViewData);
        // article
        router.post('/article/list', mobile_article_1.default.getArticleList);
    }
}
exports.default = ApiTestRouter;
//# sourceMappingURL=test.js.map