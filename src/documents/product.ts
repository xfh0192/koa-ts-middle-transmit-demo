import {Document} from 'mongoose'

export default interface ProductDocument extends Document {
    tag: string,
    title: string,
    content: string,
    author: string,
}