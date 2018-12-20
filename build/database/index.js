"use strict";
/**
 * 文档：https://cn.mongoosedoc.top/docs/guide.html
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = __importStar(require("../schema/Note"));
let NoteSchema = new mongoose_1.Schema(schema);
/**
 * 实例方法（method）
 *
 * documents 是 Models 的实例。
 * Document 有很多自带的实例方法， 当然也可以自定义我们自己的方法。
 */
NoteSchema.methods.findSameTypeNote = function (cb) {
    return this.model('Note').find({ type: this.type }, cb);
};
/**
 * ## 创建一个model
 *
 * Models 是从 Schema 编译来的构造函数。
 *
 * 我们要把 schema 转换为一个 Model，使用 mongoose.model(modelName, schema) 函数：
 */
// interface NoteInstance extends Note {
//     findSameTypeNote():any;
// }
let NoteModel = mongoose_1.model('Note', NoteSchema);
// let noteInstance = new NoteModel({type: 'normal'})
// noteInstance.findSameTypeNote(function(err:any, notes:any) {
//     console.log(notes);
// })
exports.default = NoteModel;
//# sourceMappingURL=index.js.map