/**
 * 文档：https://cn.mongoosedoc.top/docs/guide.html
 */


import {Document, Schema, Model, model} from 'mongoose'

import { NoteDocument } from '../model/Note';

/**
 * ## 定义一个schema
 * 
 * Mongoose 的一切始于 Schema。
 * 每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成
 */

interface Note extends NoteDocument {
    tag: String

    findSameTypeNote(cb?: Function):any;
    // create(args:any, cb?: Function):any;
}

let noteSchema:Schema = new Schema({
    // id: Number,
    // type: String,
    title: String,
    // author: String,
    // content: String,
    // comments: [{body: String, date: Date}],
    // date: [{type: Date, default: Date.now}],
    // disabled: [{type: Boolean, default: false}],
})

/**
 * 实例方法（method）
 * 
 * documents 是 Models 的实例。 
 * Document 有很多自带的实例方法， 当然也可以自定义我们自己的方法。
 */

noteSchema.methods.findSameTypeNote = function(cb: Function) {
    return this.model('Note').find({type: this.type}, cb);
}

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

let NoteModel:Model<Note> = model('Note', noteSchema);
// let noteInstance = new NoteModel({type: 'normal'})

// noteInstance.findSameTypeNote(function(err:any, notes:any) {
//     console.log(notes);
// })

export default NoteModel;