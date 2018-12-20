import {Document} from 'mongoose'

export default interface OrderDocument extends Document {
    orderId: String,
}