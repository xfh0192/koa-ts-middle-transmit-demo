import { Schema, model, Model } from "mongoose";
import { OrderSchema } from "../schema/Order";
import OrderDocument from "../documents/order";

let schema = new Schema(OrderSchema);

let OrderModel:Model<OrderDocument> = model('Order', schema);

export default OrderModel;