// export const OrderSchema = {
//     id: String,
//     productIds: Array,
//     status: Number,
// }

export const OrderSchema = {
    id: {
        type: String,
        index: true,
        unique: true,
    },
    productIds: Array,
    status: Number,
}