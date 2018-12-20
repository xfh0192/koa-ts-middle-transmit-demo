import {Document} from 'mongoose'

export interface ListDocument extends Document {
    tag: string,
    title: string,
    content: string,
    author: string,
}