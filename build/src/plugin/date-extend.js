"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateExtend {
    constructor() {
    }
    static format(format) {
        format = format || 'yyyy-MM-dd hh:mm:ss';
        let now = new Date();
        let o = {
            "M+": now.getMonth() + 1,
            "d+": now.getDate(),
            "h+": now.getHours(),
            "m+": now.getMinutes(),
            "s+": now.getSeconds(),
            "q+": Math.floor((now.getMonth() + 3) / 3),
            "S": now.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (now.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }
    ;
}
exports.default = DateExtend;
//# sourceMappingURL=date-extend.js.map