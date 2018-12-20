"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const request_promise_1 = __importDefault(require("request-promise"));
class MobileSpecialController {
    constructor() {
        this.name = 'a';
    }
    // 静态属性
    static init(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            let rpRes = '';
            let rpResJson;
            // try {
            rpRes = yield request_promise_1.default({
                method: 'POST',
                // json: true,
                // body: req.body,
                formData: {
                    id: req.body.id || 1366
                },
                uri: 'https://testshop.linghit.com/index.php?s=shop&c=special&a=shopSpecialDetail'
            });
            // } catch(e) {
            //     console.log(e)
            // }
            // console.log(JSON.parse(rpRes))
            rpResJson = JSON.parse(rpRes);
            console.log(rpResJson.data.title, rpResJson.data.keywords);
            ctx.status = 200;
            ctx.type = 'html'; // 让浏览器作为html打开
            // ctx.body = fs.createReadStream(path.resolve('src/view/mobile/special-view.html'))
            // ctx.render('h1 #{title}, and #{keyword}', {title: 'title', keyword: '关键词'}, {fromString: true})
            // ctx.render('mobile/special-view.pug', {title: 'title', keyword: 'key'})
            let data = fs.readFileSync(path.resolve(__dirname, '../view/mobile/special-view.html')).toString();
            ctx.render(data, { title: rpResJson.data.title, keyword: rpResJson.data.keywords }, { fromString: true });
            next();
        });
    }
    // 获取专题内容
    static getSpecialViewData(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            let rpRes = '';
            // try {
            rpRes = yield request_promise_1.default({
                method: 'POST',
                // json: true,
                // body: req.body,
                formData: {
                    id: req.body.id
                },
                uri: 'https://testshop.linghit.com/index.php?s=shop&c=special&a=shopSpecialDetail'
            });
            // } catch(e) {
            //     console.log(e)
            // }
            // console.log(JSON.parse(rpRes))
            ctx.status = 200;
            // ctx.body = {
            //     message: 'special view post',
            //     body: {
            //         id: 233,
            //         arr: [1,2,3,4],
            //         code: JSON.parse(rpRes).msg
            //     }
            // }
            ctx.body = rpRes; // 直接将结果返回，直接就是json
            next();
        });
    }
}
exports.default = MobileSpecialController;
//# sourceMappingURL=mobile-special.js.map