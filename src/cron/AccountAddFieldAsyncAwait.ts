'use strict';

import { Db, Collection } from "mongodb"
import { accessWebAPI } from "../utils/tool"
import GetDB from "../utils/mongo"
import Task from "../utils/Task"
import Async from "../utils/myasync"

//async/await 类 async.whilst 方式遍历
export default async function analysisAllUserAsyncAwait() {
    let endtime = new Date().getTime() / 1000;
    let arg = await GetDB("bi");
    let db: Db = arg.db as Db;
    let LastAnalysisTimeCol: Collection = db.collection('lastanalysistime');
    let AccountCol: Collection = db.db("user").collection('account');
    //上次分析时间
    let begintime: any = await new Promise((resolve, reject) => {
        LastAnalysisTimeCol.findOne({ jobtype: "user" }, (err, lastinfo) => {
            begintime = (lastinfo) ? lastinfo.time : 0; //有数据，从这数据开始，到现在。
            resolve(begintime);
        })
    });
    //要分析的telphone
    let telphones: any = await new Promise((resolve, reject) => {
        return new Promise((resolve, reject) => {
            AccountCol.distinct('telphone', (err, telphones) => {
                resolve(telphones);
            })
        })
    });
    //遍历分别更新
    (function () {
        let num = -1;
        return Async.whilst(
            function () { return (num++ < telphones.length - 1); },
            function () {
                return new Promise((resolve, reject) => {
                    accessWebAPI('www.google.com', '/bytelphone/' + telphones[num], 'GET', null, function (err, apidata) {
                        if (!err && apidata.item) {
                            resolve(apidata.item);
                        } else {
                            resolve(null);
                        }
                    })
                }).then((item: any) => {
                    let lastVisitAt = (new Date(item.lastVisitAt)).getTime() / 1000;
                    return new Promise((resolve, reject) => {
                        AccountCol.update({ _id: item.id }, { $set: { field: item.field } }, (err, count) => {
                            resolve(count);
                        })
                    })
                })
            }
        )
    })()
    //更新时间
    await new Promise((resolve, reject) => {
        LastAnalysisTimeCol.update({ jobtype: "user" }, { $set: { time: endtime } }, { upsert: true }, (err, doc) => {
            resolve();
        })
    });
    //清理连接
    db.close();
}

if (!module.parent) {
    let t = new Task("job test", analysisAllUserAsyncAwait);
    console.log(" job test start" + t.start());
}
