'use strict'

import { Db, Collection } from "mongodb"
import { accessWebAPI } from "../utils/tool"
import GetDB from "../utils/mongo"
import Task from "../utils/Task"
import Async from "../utils/myasync"

//then版 类 async.whilst 方式遍历
export default async function analysisAllUserPromise() {
    let endtime = new Date().getTime() / 1000;
    let AccountCol, LastAnalysisTimeCol;
    let begintime;
    let arg = await GetDB("bi");
    let db = arg.db;
    LastAnalysisTimeCol = db.collection('lastanalysistime');
    AccountCol = db.db("user").collection('account');
    //得到上次分析时间 实现目的 第一次分析完后，写入分析时间，下一次开始从这个时间之后过滤数据再分析
    await new Promise((resolve, reject) => {
        LastAnalysisTimeCol.findOne({ jobtype: "user" }, (err, lastinfo) => {
            begintime = (lastinfo) ? lastinfo.time : 0; //有数据，从这数据开始，到现在。
            resolve(begintime);
        })
    }).then(function (begintime: number) {
        return new Promise((resolve, reject) => {
            AccountCol.distinct('telphone', (err, telphones) => {
                resolve(telphones);
            })
        })
    }).then(function (telphones: Array<any>) {
        console.log(telphones.length);
        let num = -1;
        return Async.whilst(
            function () { return (num++ < telphones.length - 1); },
            function () {
                return new Promise((resolve, reject) => {
                    accessWebAPI('www.google.com', '/bytelphone/' + telphones[num], 'GET', null, (err, apidata) => {
                        if (!err && apidata.item) {
                            resolve(apidata.item);
                        } else {
                            resolve(null);
                        }
                    })
                }).then(function (item: any) {
                    let lastVisitAt = (new Date(item.lastVisitAt)).getTime() / 1000;
                    return new Promise((resolve, reject) => {
                        AccountCol.update({ _id: item.id }, { $set: { field: item.field } }, (err, count) => {
                            resolve(count);
                        })
                    })
                })
            }
        )
    }).then(function () {
        return new Promise((resolve, reject) => {
            LastAnalysisTimeCol.update({ jobtype: "user" }, { $set: { time: endtime } }, { upsert: true }, (err, doc) => {
                db.close();
                resolve();
            })
        })
    })
}

if (!module.parent) {
    let t = new Task("job test", analysisAllUserPromise);
    console.log(" job test start" + t.start());
}