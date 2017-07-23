'use strict';

import { CronJob } from "cron";
import Task from "../utils/Task"

import analysisAllUserAsyncAwait from "./AccountAddFieldAsyncAwait"
import analysisAllUserPromise from "./AccountAddFieldPromise"

import personSqlToEs from "./PersonMysqlToEs"

//定义定时事件
//name 为任务标识 同名事件只能有一个事件进行，前一次未完成，后一次时间到了也不执行
//para 若事件处理函数需要额外的参数，则在这里传递
let cronList = {
    '0 */5 * * * *': [
        { name: "AccountAddFieldAsyncAwait", run: analysisAllUserAsyncAwait, para: { arg1: "arg1" } },
        { name: "AccountAddFieldPromise", run: analysisAllUserPromise, para: { arg1: "arg1" } },
    ],
    '* * */2 * * *': [
        { name: "personSqlToEs", run: personSqlToEs, para: { arg1: "arg1" } },
    ],
};
//注册事件
let jobs = [];
for (let schedule in cronList) {
    let taskList = cronList[schedule];
    for (let i = taskList.length; i--;) {
        let task = new Task(taskList[i].name, taskList[i].run.bind(null, taskList[i].para || []));
        jobs.push(new CronJob(schedule, task.start.bind(task)));
    }
}

//启动所有注册定时事件
export function run() {
    for (let i = jobs.length; i--;) {
        jobs[i].start();
    }
}

//暂时没用，目前都是通过杀进程中止
export function stop() {
    for (let i = jobs.length; i--;) {
        jobs[i].stop();
    }
};

process.on('unhandledRejection', function (err, p) {
    console.error(err.stack)
});

//主入口
if (!module.parent) {
    run();
}
