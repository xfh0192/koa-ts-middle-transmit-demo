"use strict";
// export const OrderSchema = {
//     id: String,
//     productIds: Array,
//     status: Number,
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = {
    id: {
        type: String,
        index: true,
        unique: true,
    },
    productIds: Array,
    status: Number,
};
//# sourceMappingURL=Order.js.map