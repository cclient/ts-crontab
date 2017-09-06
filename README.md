typescript
es6
promise
async/await
mongodb
gulp

typescript 实现的定时任务

AccountAddFieldPromise promise版
AccountAddFieldPromise async/await版

# 编译

## 切换置项目dir

## gulp build

# 测试单作务

## node lib/cron/AccountAddFieldAsyncAwait.js

# 启动多作务

## node lib/cron/index.js


# 备注

最初使用typescript的初衷是强类型，和async/await(算是es7的标准，在es5还是主流，es6尚未发布之时,typescript早早就支持了，受够了es5的回调和流程控制，async,co,generator凑合用过段时间，体验并不好，后期则都迁移至typescript)

个人有.net + java工作经验，js的开发体验很糟糕

因关注 MS Build 2015 了解到 Visual Studio Code，最早的亮点是是js定义文件，和强类型语法提示（比其他ide猜类型不知道高到哪里去了，省得老得跑去看各种包的readme和源码）

非前端的nodejs工作 ide便渐由webstrom 转为 VSC，又由VSC了解到 typescript，尝试性将es5往typescript迁移，最初便是该project。

第一版完成于2015年，其时es6尚未发布，第三包甚至官方包都尚不支持es6,且大量缺少描述文件,typescript版本低，社区的支持并不好，为了兼容，代码里有大量es5语法，es5+typescript显得不伦不类，也无法100%typescript的体验。

比如为了引es5的包，不能用import 还得按nodejs es5 cmd的方式引入

module.exports.analysisAllUserPromise = analysisAllUserPromise
var mongodb = require("mongodb");

tsd少则不说(总不能老自已花工夫写，成本太高)，且不能自动引入，只能自已手动加描述到文件列头
<!-- -///<TypeScriptExperimentalAsyncFunctions>true</TypeScriptExperimentalAsyncFunctions>
-/// <reference path='../../typings/node/node.d.ts' />
-/// <reference path='../../typings/mongodb/mongodb.d.ts' />
-/// <reference path='../../typings/redis/redis.d.ts' /> -->

随着es6的升级，第三方包的升级，对typescript的支持越来越好，只是1年多点的时间，开发体验大大提升。

业余抽时间将原es5+typescript1.*的混合模式，更新为es6+typescript2.*,并添加了几项demo，回头看旧的代码问题很多，只是demo性质，也没时间细改，就还保持原样。
