## 说明

ts试水demo，了解文档和进行配置花了挺多时间的。

1. 使用koa+ts，尝试写一个用于转发请求和模板渲染的中间层demo。
2. 参考了egg的结构，同时简单过了一遍ts的文档，也在这上面简单尝试各种语法
3. 只有几个简单的接口，还有一两个声明文件和错误日志log逻辑，也对原生类型添加方法进行尝试
4. 一方面是想法不够，只能作为试水，一方面是打算改用egg重新的写一下看看，所以此demo更多会用于试用各种语法和模块等
5. 欢迎提建议！！

## 使用

```
安装依赖
npm install

运行测试(保存后会自动重启，或者输入rs重启)
npm run dev
```
***

## tsconfig.json
https://segmentfault.com/a/1190000007574276
https://github.com/zhongsp/TypeScript/blob/master/doc/handbook/tsconfig.json.md

## 包
1. koa
2. koa-router
3. nodemon（用于重启node服务器/  https://blog.csdn.net/huangyong1991/article/details/78531998
4. 模板引擎pug

## 说明
1. 用ts的话，需要添加类型映射。npm install --save-dev @types/koa...
2. src/stash/ 中是一些测试ts语法的文件。。可无视