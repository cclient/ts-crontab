let getYYMMDD = function (date) {
    if (!date) {
        date = new Date();
    }
    let yymmdd = ('0' + (date.getFullYear())).slice(-2) + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    return yymmdd;
}
let getYYYYMMDD = function (date) {
    if (!date) {
        date = new Date();
    }
    let yymmdd = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    return yymmdd;
}

let getYYYYMMDDhhmmss = function (date) {
    if (!date) {
        date = new Date();
    }

    let yymmddhhmmss = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
    return yymmddhhmmss;
}
let getYYYYMMDDhhmm = function (date) {
    if (!date) {
        date = new Date();
    }
    let yymmddhhmm = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
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
function getTodayTimeZero() {
    let date = new Date();
    date.setHours(0, 0, 0, 0)
    return date.getTime() / 1000
}


module.exports.getTodayTimeZero = getTodayTimeZero
module.exports.getCurTs = getCurTs
module.exports.getYYMMDD = getYYMMDD
module.exports.getYYYYMMDD = getYYYYMMDD
module.exports.getYYYYMMDDhhmm = getYYYYMMDDhhmm