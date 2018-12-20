"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = __importStar(require("../schema/List"));
let ListSchema = new mongoose_1.Schema(schema);
let ListModel = mongoose_1.model('List', ListSchema);
exports.default = ListModel;
//# sourceMappingURL=list.js.map