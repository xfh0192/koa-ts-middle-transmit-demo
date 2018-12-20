"use strict";
/**
 * 文档：https://cn.mongoosedoc.top/docs/guide.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Note_1 = require("../schema/Note");
let schema = new mongoose_1.Schema(Note_1.NoteSchema);
/**
 * 实例方法（method）
 *
 * documents 是 Models 的实例。
 * Document 有很多自带的实例方法， 当然也可以自定义我们自己的方法。
 */
schema.methods.findSameTypeNote = function (cb) {
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
let NoteModel = mongoose_1.model('Note', schema);
// NoteModel.create({content: 'ccc'}, () => {})
exports.default = NoteModel;
//# sourceMappingURL=note.js.map