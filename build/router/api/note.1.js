"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const note_1 = __importDefault(require("../../controller/note"));
class NoteRouter extends koa_router_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.init();
    }
    init() {
        let router = this.router;
        // 新增一条note
        router.post('/add', note_1.default.add);
        // 获取一条/所有note
        router.get('/get', note_1.default.get);
        // 更新一条note
        router.post('/update', note_1.default.update);
    }
}
exports.default = NoteRouter;
//# sourceMappingURL=note.1.js.map