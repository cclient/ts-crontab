'use strict'

import * as elasticsearch from "elasticsearch";

export function getESConnection() {
    let client = new elasticsearch.Client({
        // host: eshost + ":9200",
        // log: 'trace'
    });
    return client
}




