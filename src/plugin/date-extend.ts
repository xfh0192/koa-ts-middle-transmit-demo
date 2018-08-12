
export default class DateExtend {

    constructor() {

    }

    public static format(format?: string): string {
        interface keys {
            [key: string]: number, 
        }
    
        format = format || 'yyyy-MM-dd hh:mm:ss';
        let now = new Date();
        let o: keys = {
            "M+": now.getMonth()+1, //month
            "d+" : now.getDate(),    //day
            "h+" : now.getHours(),   //hour
            "m+" : now.getMinutes(), //minute
            "s+" : now.getSeconds(), //second
            "q+" : Math.floor((now.getMonth()+3)/3),  //quarter
            "S" : now.getMilliseconds() //millisecond
        }
    
        if(/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (now.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
            }
        }
        return format;
    };
}
