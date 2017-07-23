
let influx = require("influx");

export function getInfluxClient() {
    return influx({
        host: 'influx-1',
        port: 8086, // optional, default 8086
        username: 'root',
        password: 'root',
        database: 'test'
    });
}