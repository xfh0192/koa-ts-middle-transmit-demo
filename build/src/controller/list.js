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
const list_1 = __importDefault(require("../database/list"));
const url_1 = require("url");
const utils_1 = require("../utils/utils");
class ListController {
    constructor() {
        this.name = 'ListClass';
    }
    static add(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            let title = req.body.title;
            let content = req.body.content;
            console.log(req);
            console.log(req.body);
            // save method！！
            try {
                let a = {
                    tag: 'tag',
                    title: title,
                    content: content,
                    author: 'au',
                };
                console.log(a);
                let list = yield list_1.default.create(a);
                console.log(list);
                ctx.status = 200;
                ctx.body = list;
                console.log('存库成功');
            }
            catch (err) {
                ctx.message = '出错了';
                ctx.status = 503;
                throw new Error(err);
            }
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            let getUrl = new url_1.URL(`${utils_1.testHost + req.url}`);
            let id = getUrl.searchParams.get('id');
            let list;
            try {
                if (id) {
                    // 有id获取单条
                    list = yield list_1.default.findById(id).exec();
                }
                else {
                    // 没有id获取全部
                    list = yield list_1.default.find().exec();
                }
                ctx.status = 200;
                ctx.body = list;
                // console.log('list done in')
            }
            catch (err) {
                ctx.message = '出错了';
                ctx.status = 503;
                throw new Error(err);
            }
        });
    }
    static update(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            let id = req.body.id;
            let content = req.body.content || '';
            console.log('content: ', content);
            let list;
            try {
                list = yield list_1.default.findByIdAndUpdate(id, {
                    title: 'he',
                    content: content
                }, {
                    new: true
                }).exec();
                console.log('updated');
                console.log('===============');
                console.log(list);
                console.log('===============');
                ctx.status = 200;
                ctx.body = list;
            }
            catch (err) {
                ctx.message = '出错了';
                ctx.status = 503;
                throw new Error(err);
            }
            next();
        });
    }
}
exports.default = ListController;
//# sourceMappingURL=list.js.map