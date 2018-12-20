"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Admin_1 = require("../schema/Admin");
// import AdminDocument from "../documents/admin";
let schema = new mongoose_1.Schema(Admin_1.AdminSchema);
let AdminModel = mongoose_1.model('admin', schema);
exports.default = AdminModel;
//# sourceMappingURL=admin.js.map