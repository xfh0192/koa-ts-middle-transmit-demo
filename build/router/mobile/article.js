"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const mobile_article_1 = __importDefault(require("../../controller/mobile-article"));
class ArticleListRouter extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        router.use(koa_bodyparser_1.default());
        router.get('/list.html', mobile_article_1.default.init);
    }
}
exports.default = ArticleListRouter;
//# sourceMappingURL=article.js.map