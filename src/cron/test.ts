'use strict';

import Task from "../utils/Task"
import Async from "../utils/myasync"

let wait = 2000;

function GetFunc(step: number): Promise<Function> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a => {
                // console.log(typeof a);
                return a + step;
            })
        }, wait);
    })
}

// 遍历方式一，串行，仿async.whislt
async function iter1(arr: Array<number>, func: Function) {
    console.log('start method 1 ' + new Date());
    let num = -1
    let arrv = [];
    return Async.whilst(
        () => { return (num++ < arr.length - 1); },
        () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("iter method 1 ", func(arr[num]), new Date())
                    // arrps.push(func(arr[num]))
                    arrv.push(func(arr[num]));
                    resolve(func(arr[num]));
                }, wait);
            })
        }
    ).then(() => {
        console.log("all end 1", arrv, new Date());
        console.log('end method 1 ' + new Date());
    })
}

// 遍历方式二，串行
async function iter2(arr: Array<number>, func: Function) {
    console.log('start method 2 ' + new Date());
    let arrv = [];
    // for (let a in arr) {
    for (let a of arr) {
        console.log(typeof a)
        await (async () => {
            // console.log('Do some thing 2, ' + new Date());
            let val = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("iter method 2 ", func(a), new Date())
                    resolve(func(a));
                }, wait);
            });
            arrv.push(val);
            // console.log('Do other things 2, ' + new Date());
        })();
    }
    console.log("all end 2", arrv, new Date());
    console.log('end method 2 ' + new Date());
}

//map 遍历方式三，并行
async function iter3(arr: Array<number>, func: Function) {
    console.log('start method 3 ' + new Date());
    let arrps = arr.map(a =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("iter method 3 ", func(a), new Date())
                resolve(func(a));
            }, wait);
        })
    );
    console.log("all end 3", await Promise.all(arrps), new Date());
    console.log('end method 3 ' + new Date());
}

//foreach 遍历方式四，并行
async function iter4(arr: Array<number>, func: Function) {
    console.log('start method 4 ' + new Date());
    let arrps = [];
    await arr.forEach(async  a => {
        // await (async function () {
        // console.log('Do some thing, ' + new Date());
        let val = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("iter method 4", func(a), new Date())
                resolve(func(a));
            }, wait);
        });
        arrps.push(val)
        // console.log('Do other things, ' + new Date());
        // })();
    })
    console.log("all end 4", await Promise.all(arrps), new Date());
    console.log('end method 4 ' + new Date());

}

async function test0() {
    let arr = [1, 2];
    let func = await GetFunc(2);
    let step: any = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, wait);
    });
    await iter1(arr, func);
    await iter2(arr, func);
    await iter3(arr, func);
    await iter4(arr, func);
}

module.exports.test0 = test0
if (!module.parent) {
    let t1 = new Task("job test", test0)
    console.log(" job test start" + t1.start())
}