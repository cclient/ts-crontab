///<TypeScriptExperimentalAsyncFunctions>true</TypeScriptExperimentalAsyncFunctions>
/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../../typings/mongodb/mongodb.d.ts' />
/// <reference path='../../typings/redis/redis.d.ts' />

'use strict';
var mongodb = require("mongodb");
var tool = require("../utils/tool");
var CTask = require("../utils/ITask");
var myasync = require("../utils/myasync");

var ayalysictype = "user"
//async/await 版
async function analysisAllUserAsyncAwait() {
    let endtime = new Date().getTime() / 1000;
    let AccountCol, LastAnalysisTimeCol;
    let arg = await tool.GetDB();
    let db = arg.db;
    LastAnalysisTimeCol = db.collection('lastanalysistime');
    AccountCol = db.db("user").collection('account');
    //上次分析时间
    let begintime: any = await new Promise(function (resovle, reject) {
        LastAnalysisTimeCol.findOne({ jobtype: ayalysictype }, function (err, lastinfo) {
            begintime = (lastinfo) ? lastinfo.time : 0; //有数据，从这数据开始，到现在。
            resovle(begintime)
        })
    });
    //要分析的telphone
    let telphones: any = await new Promise(function (resovle, reject) {
        return new Promise(function (resovle, reject) {
            AccountCol.distinct('telphone', function (err, telphones) {
                resovle(telphones);
            })
        })
    });
    //遍历分别更新
    (function () {
        let num = -1;
        return myasync.whilst(
            function () { return (num++ < telphones.length); },
            function () {
                return new Promise(function (resovle, reject) {
                    tool.accessWebAPI('www.google.com', '/bytelphone/' + telphones[num], 'GET', null, function (err, apidata) {
                        if (!err && apidata.item) {
                            resovle(apidata.item);
                        } else {
                            resovle(null)
                        }
                    })
                }).then(function (item: any) {
                    var lastVisitAt = (new Date(item.lastVisitAt)).getTime() / 1000;
                    return new Promise(function (resovle, reject) {
                        AccountCol.update({ _id: item.id }, { $set: { field: item.field } }, function (err, count) {
                            resovle(count);
                        })
                    })
                })
            }
        )
    })()
    //更新时间
    await new Promise(function (resovle, reject) {
        LastAnalysisTimeCol.update({ jobtype: ayalysictype }, { $set: { time: endtime } }, { upsert: true }, function (err, doc) {
            resovle()
        })
    });
    //清理连接
    db.close();
}

module.exports.analysisAllUserAsyncAwait = analysisAllUserAsyncAwait
if (!module.parent) {
    var t1 = new CTask("job test", analysisAllUserAsyncAwait)
    console.log(" job test start" + t1.start())
}
