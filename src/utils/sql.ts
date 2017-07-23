import conf from "../conf/config"

import { createPool } from "mysql"

let pool = createPool(conf.mysqlpool);

export async function query(sql): Promise<any> {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        });
    })
}