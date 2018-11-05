import {Document} from 'mongoose'

export interface NoteDocument extends Document {
    id: Number,
    type: String,
    title: String,
    author: String,
    content: String,
}