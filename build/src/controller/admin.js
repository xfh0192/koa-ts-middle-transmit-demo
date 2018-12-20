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
const admin_1 = __importDefault(require("../database/admin"));
// import { testHost } from "../utils/utils";
// import * as test1 from 'test1'
// let a = test2.name
// let b = test1
class AccountController {
    constructor() {
        this.name = 'ProductClass';
    }
    // 新增一条数据
    static regist(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = ctx.request;
            console.log(req);
            console.log(req.body);
            // save method！！
            try {
                let a = {
                    id: 1,
                    account: 'account1',
                    password: 'au111',
                };
                console.log(a);
                let note = yield admin_1.default.create(a);
                ctx.status = 200;
                ctx.body = note;
                console.log('存库成功');
            }
            catch (err) {
                ctx.message = '出错了';
                ctx.status = 503;
                throw new Error(err);
            }
        });
    }
}
exports.default = AccountController;
//# sourceMappingURL=admin.js.map