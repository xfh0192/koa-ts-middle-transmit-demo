"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
let Pug = require('koa-pug'); // 声明文件貌似有问题，直接require
// import Pug from 'koa-pug'
const error_handler_1 = __importDefault(require("./plugin/error-handler"));
const index_1 = __importDefault(require("./router/index"));
const app = new koa_1.default();
// 渲染引擎
// const pug = new Pug({
//     viewPath: './src/view'
// })
// pug.use(app)
// bodyparser
app.use(koa_bodyparser_1.default());
// 路由
const baseRouterInstance = new index_1.default();
app.use(baseRouterInstance.router.routes());
// cors
app.use(koa2_cors_1.default());
// 错误处理
app.on('error', (err, ctx) => {
    error_handler_1.default.log(err);
});
// 启动mongodb
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/test');
const connection = mongoose_1.default.connection;
connection.on('error', () => {
    console.log('数据库连接失败');
});
connection.once('open', () => {
    console.log('数据库连接成功!');
});
// let schema = mongoose.Schema;
// let NoteSchema = new schema({
//     title: String
// })
// let model = mongoose.model('note', NoteSchema);
// model.create({title: 'hihihi111'}, () => {
//     console.log('done')
// })
app.listen(4000);
// // let options = {
// //     key: fs.readFileSync(path.join(__dirname, '../server.key'), 'utf8'),
// //     cert: fs.readFileSync(path.join(__dirname, '../server.crt'), 'utf8')
// // }
// // https.createServer(options, app.callback()).listen(3000);
//# sourceMappingURL=app.js.map