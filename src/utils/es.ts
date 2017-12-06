'use strict'

import * as elasticsearch from "elasticsearch";

let client=null;

export function getESConnection() {
    if(client != null){
        return client
    }else{
         client = new elasticsearch.Client({
        // host: eshost + ":9200",
        // log: 'trace'             
         });
         return client
    }
}





