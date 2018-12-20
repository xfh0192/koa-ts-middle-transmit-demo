/**
 * 文档：https://cn.mongoosedoc.top/docs/guide.html
 */


import {Document, Schema, Model, model} from 'mongoose'

import { ProductSchema } from '../schema/Product'
import ProductDocument from '../documents/Product';

/**
 * ## 定义一个schema
 * 
 * Mongoose 的一切始于 Schema。
 * 每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成
 */

interface Product extends ProductDocument {
    tag: string

    create(args:any, cb?: Function):any;
}

let schema:Schema = new Schema(ProductSchema)

/**
 * 实例方法（method）
 * 
 * documents 是 Models 的实例。 
 * Document 有很多自带的实例方法， 当然也可以自定义我们自己的方法。
 */

schema.methods.findSameTypeProduct = function(cb: Function) {
    return this.model('Product').find({type: this.type}, cb);
}

/**
 * ## 创建一个model
 * 
 * Models 是从 Schema 编译来的构造函数。
 * 
 * 我们要把 schema 转换为一个 Model，使用 mongoose.model(modelName, schema) 函数：
 */

// interface ProductInstance extends Product {
//     findSameTypeProduct():any;
// }

let ProductModel:Model<Product> = model('Product', schema);

// ProductModel.create({content: 'ccc'}, () => {})

export default ProductModel;