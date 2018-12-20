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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const request_promise_1 = __importDefault(require("request-promise"));
class ArticleListController {
    constructor() {
        this.name = 'article-list';
    }
    static init(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let rpRes;
            let rpResJson;
            // try {
            rpRes = yield request_promise_1.default({
                method: 'POST',
                uri: 'https://testshop.linghit.com/index.php?s=shop&c=ApiArticle&a=articleList',
                formData: {
                    page: 1
                }
            });
            rpResJson = JSON.parse(rpRes);
            // console.log(rpResJson.data)
            var getCookie = ctx.cookies.get('testCookie');
            console.log(getCookie || 'no cookie get');
            ctx.status = 200;
            ctx.type = 'html';
            ctx.cookies.set('testCookie', 'koacookie');
            let data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../view/mobile/article-list.html')).toString();
            ctx.render(data, { title: '资讯列表333' }, { fromString: true });
            next();
            // } catch(e) {
            //     console.log(e)
            //     next()
            // }
        });
    }
    static getArticleList(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let rpRes;
            let rpResJson;
            // try {
            rpRes = yield request_promise_1.default({
                method: 'POST',
                uri: 'http://testshop.linghit.com/index.php?s=shop&c=ApiArticle&a=articleList',
                formData: {
                    page: 1
                }
            });
            var getCookie = ctx.cookies.get('koa');
            console.log(getCookie || 'no cookie get');
            ctx.status = 200;
            ctx.cookies.set('koa', 'koa');
            ctx.body = rpRes;
            next();
            // } catch(e) {
            //     console.log(e)
            //     next()
            // }
        });
    }
}
exports.default = ArticleListController;
//# sourceMappingURL=mobile-article.js.map