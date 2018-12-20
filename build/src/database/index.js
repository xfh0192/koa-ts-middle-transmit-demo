"use strict";
/**
 * 文档：https://cn.mongoosedoc.top/docs/guide.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let noteSchema = new mongoose_1.Schema({
    id: Number,
    type: String,
    title: String,
    author: String,
    content: String,
    comments: [{ body: String, date: Date }],
    date: [{ type: Date, default: Date.now }],
    disabled: [{ type: Boolean, default: false }],
});
/**
 * 实例方法（method）
 *
 * documents 是 Models 的实例。
 * Document 有很多自带的实例方法， 当然也可以自定义我们自己的方法。
 */
noteSchema.methods.findSameTypeNote = function (cb) {
    return this.model('Note').find({ type: this.type }, cb);
};
/**
 * ## 创建一个model
 *
 * 我们要把 schema 转换为一个 Model，使用 mongoose.model(modelName, schema) 函数：
 */
// interface NoteInstance extends Note {
//     findSameTypeNote():any;
// }
let noteModel = mongoose_1.model('Note', noteSchema);
let noteInstance = new noteModel({ type: 'normal' });
noteInstance.findSameTypeNote(function (err, notes) {
    console.log(notes);
});
// const connection = mongoose.connect('mongodb://localhost/test')
