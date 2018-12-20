"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Order_1 = require("../schema/Order");
let schema = new mongoose_1.Schema(Order_1.OrderSchema);
let OrderModel = mongoose_1.model('Order', schema);
exports.default = OrderModel;
//# sourceMappingURL=order.js.map