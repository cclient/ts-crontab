'use strict';
let http = require("http");

export function accessWebAPI(host, path, method, postdata, callback) {
    let queryoptions = {
        host: host,
        //        port: 8000,
        path: path,
        method: method,
        headers: {
            "Content-Type": 'application/json'
            //            "Content-Length": data.length
        }
    };
    let senddata = '';
    let req = http.request(queryoptions, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            senddata += chunk;
        });
        res.on('end', () => {
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
    req.on('error', (err) => {
        console.log('api error' + err);
        callback(err, null);
    });
    req.end();
}

function formatMac(macString) {
    if (typeof macString !== 'string') {
        return null;
    }
    let result = macString.toLowerCase().replace(/[^0-9a-f]/igm, '');
    return result.length === 12 ? (result.slice(0, 2) + '-' + result.slice(2, 4) + '-' + result.slice(4, 6) + '-' + result.slice(6, 8) + '-' + result.slice(8, 10) + '-' + result.slice(10)).toUpperCase() : null;
};

function getsimplemac(oldkey) {
    let macindex = oldkey.lastIndexOf('-');
    if (macindex != -1) {
        let onlaymac = oldkey.substring(0, macindex + 3);
        return onlaymac;
    }
    else {
        return null;
    }
}