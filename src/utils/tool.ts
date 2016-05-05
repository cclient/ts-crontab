///<TypeScriptExperimentalAsyncFunctions>true</TypeScriptExperimentalAsyncFunctions>
/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../../typings/mongodb/mongodb.d.ts' />

'use strict';
var url = 'mongodb://127.0.0.1:27017/bi';
var mongodb = require("mongodb")
var http = require("http");
var eshost = 'es-1';
var elasticsearch = require('elasticsearch');

var getYYMMDD = function (date) {
    if (!date) {
        date = new Date();
    }
    var yymmdd = ('0' + (date.getFullYear())).slice(-2) + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    return yymmdd;
}
var getYYYYMMDD = function (date) {
    if (!date) {
        date = new Date();
    }
    var yymmdd = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    return yymmdd;
}

var getYYYYMMDDhhmmss = function (date) {
    if (!date) {
        date = new Date();
    }

    var yymmddhhmmss = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
    return yymmddhhmmss;
}
var getYYYYMMDDhhmm = function (date) {
    if (!date) {
        date = new Date();
    }

    var yymmddhhmm = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
    return yymmddhhmm;
}

function getCurTs() {
    return new Date().getTime() / 1000;
}

function getDateCurTs(date) {
    return date.getTime() / 1000;
}

function getCurMillionTs() {
    return new Date().getTime();
}
function getDateCurMillionTs(date) {
    return date.getTime();
}
function getCurMillionTsToLong() {

    return new Date().getTime();
}
function getDateCurMillionTsToLong(date) {
    return parseInt(date.getTime());
}
function getYYYYMMDDHH(date) {
    if (!date)
        date = new Date();

    return date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2) + ('0' + date.getHours()).slice(-2);
}

function cloneObj(obj) {
    if (typeof (obj) != 'object') {
        return null;
    }
    var newObj = JSON.stringify(obj);
    return JSON.parse(newObj);

}

function accessWebAPI(host, path, method, postdata, callback) {
    var queryoptions = {
        host: host,
        //        port: 8000,
        path: path,
        method: method,
        headers: {
            "Content-Type": 'application/json'
            //            "Content-Length": data.length
        }
    };
    var senddata = '';
    var req = http.request(queryoptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            senddata += chunk;
        });
        res.on('end', function () {
            try {
                callback(null, JSON.parse(senddata));
            } catch (error) {
                callback(null, {});
            }

        });
    });
    if (postdata) {
        req.write(JSON.stringify(postdata) + '\n');
    }
    else {
        req.write('' + '\n');
    }
    req.on('error', function (e) {
        console.log('api error' + e);
        callback(e, null);
    });
    req.end();
}


function GetDB(dbname: string) {
    return new Promise(function (resovle, reject) {
        console.log("url " + url)
        mongodb.MongoClient.connect(url, function (err, db) {
            if (dbname) { db.db(dbname) }
            if (!err) resovle({ db: db })
            reject("db ini error" + err)
        })
    })
}

function getTodayTimeZero() {
    let date = new Date();
    date.setHours(0, 0, 0, 0)
    return date.getTime() / 1000
}

function formatMac(macString) {
    if (typeof macString !== 'string') {
        return null;
    }
    var result = macString.toLowerCase().replace(/[^0-9a-f]/igm, '');
    return result.length === 12 ? (result.slice(0, 2) + '-' + result.slice(2, 4) + '-' + result.slice(4, 6) + '-' + result.slice(6, 8) + '-' + result.slice(8, 10) + '-' + result.slice(10)).toUpperCase() : null;
};

function getESConnection() {
    let client = new elasticsearch.Client({
        host: eshost + ":9200",
        // log: 'trace'
    });
    return client
}



var redis = require("redis");
function getRedisDb() {
    var client = redis.createClient(6379, '127.0.0.1', {});
    client.on("error", function (err) {
        console.log("Error " + err);
    });
    return client;
}
var influx = require("influx");

function getInfluxClient() {
    return influx({
        host: 'influx-1',
        port: 8086, // optional, default 8086
        username: 'root',
        password: 'root',
        database: 'test'
    });
}

function getsimplemac(oldkey) {
    var macindex = oldkey.lastIndexOf('-');
    if (macindex != -1) {
        var onlaymac = oldkey.substring(0, macindex + 3);
        return onlaymac;
    }
    else {
        return null;
    }
}

module.exports.GetDB = GetDB
module.exports.getRedisDb = getRedisDb
module.exports.getESConnection = getESConnection
module.exports.getInfluxClient = getInfluxClient

module.exports.accessWebAPI = accessWebAPI

module.exports.getTodayTimeZero = getTodayTimeZero
module.exports.getCurTs = getCurTs
module.exports.getYYMMDD = getYYMMDD
module.exports.getYYYYMMDD = getYYYYMMDD
module.exports.getYYYYMMDDhhmm = getYYYYMMDDhhmm

module.exports.formatMac = formatMac