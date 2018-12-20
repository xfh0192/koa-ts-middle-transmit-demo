export const AdminSchema = {
    id: {
        type: Number,
        index: true,
        unique: true,
    },
    account: String,
    password: String,
}