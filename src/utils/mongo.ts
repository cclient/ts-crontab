'use strict'
import { MongoClient, Db } from "mongodb";

const url = 'mongodb://127.0.0.1:27017/bi';

export default function GetDB(dbname: string): Promise<any> {
    return new Promise((resolve, reject) => {
        console.log("url " + url)
        MongoClient.connect(url, (err, db) => {
            if (dbname) { db.db(dbname) }
            if (!err) resolve({ db: db })
            reject("db ini error" + err)
        })
    })
}