
import * as fs from 'fs'
import * as path from 'path'
import DateExtend from './date-extend'

let fsPromise = fs.promises;

/**
 * 错误处理plugin
 * 假如运行中错误没有被try-catch，就在此处处理
 */

export default class ErrorHandler {

    public static async log(err: Error) {
        if (err) {
            let logsDir = path.resolve('src/logs');
            // console.log(logsDir)
            let errorLogFileName = 'error-log.txt';
            let logFile = path.join(logsDir, errorLogFileName);

            let log = `[${DateExtend.format('yyyy-MM-dd hh:mm:ss')}]: ${err.message}\n`;

            // await fs.open(path.join(logsDir, errorLogFileName), 'w', async (e: Error, fd: any) => {
                // if (e) throw e;
                // 追加内容不需要open
                await fs.appendFile(logFile, log, (e: Error) => {
                    if (e) throw e;
                    console.log(`[${DateExtend.format()}]: error log finish`);
                })
            // })

            // fsPromise 需要node版本在v10以上。。
            // let fsOpen = await fsPromise.open(logFile, 'w');
            // let fsAppendFile = await fsOpen.appendFile(logFile, err.message);
        }
    }
}