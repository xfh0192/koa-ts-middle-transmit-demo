"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const date_extend_1 = __importDefault(require("./date-extend"));
let fsPromise = fs.promises;
/**
 * 错误处理plugin
 * 假如运行中错误没有被try-catch，就在此处处理
 */
class ErrorHandler {
    static log(err) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err) {
                let logsDir = path.resolve('src/logs');
                // console.log(logsDir)
                let errorLogFileName = 'error-log.txt';
                let logFile = path.join(logsDir, errorLogFileName);
                let log = `[${date_extend_1.default.format('yyyy-MM-dd hh:mm:ss')}]: ${err.message}\n`;
                // await fs.open(path.join(logsDir, errorLogFileName), 'w', async (e: Error, fd: any) => {
                // if (e) throw e;
                // 追加内容不需要open
                yield fs.appendFile(logFile, log, (e) => {
                    if (e)
                        throw e;
                    console.log(`[${date_extend_1.default.format()}]: error log finish`);
                });
                // })
                // fsPromise 需要node版本在v10以上。。
                // let fsOpen = await fsPromise.open(logFile, 'w');
                // let fsAppendFile = await fsOpen.appendFile(logFile, err.message);
            }
        });
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=error-handler.js.map