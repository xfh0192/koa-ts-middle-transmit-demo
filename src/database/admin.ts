import { Schema, model, Model, Document } from "mongoose";
import { AdminSchema } from "../schema/Admin";
// import AdminDocument from "../documents/admin";

let schema = new Schema(AdminSchema);

let AdminModel:Model<Document> = model('admin', schema);

export default AdminModel;