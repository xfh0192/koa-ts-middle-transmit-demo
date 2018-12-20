import {Document} from 'mongoose'

export interface NoteDocument extends Document {
    tag: string,
    title: string,
    content: string,
    author: string,
}