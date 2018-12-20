import {Document, Schema, Model, model} from 'mongoose'

import * as schema from '../schema/List'
import {ListDocument} from '../documents/list'

interface List extends ListDocument {
    tag: string

    findSameTypeNote(cb?: Function):any;
}

let ListSchema:Schema = new Schema(schema)

let ListModel:Model<List> = model('List', ListSchema);

export default ListModel;