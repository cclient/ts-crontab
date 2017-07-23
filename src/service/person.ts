import { query } from "../utils/sql"
import { getESConnection } from "../utils/es"
import { map, flatMap } from "lodash"
import conf from "../conf/config"

class ArticleMysql {
    id: string;
    home: string;
    place: string;
    public ToArticleES() {
        let mapping = {
            "kw_place": "place",
        }
        let esData = new ArticleES(this.home)
        esData.place = this.place
        esData._type = "type_test";
        esData._id = `${this.id}-${this.home}`
        return esData
    }
}

class ArticleES {
    _id: string;
    _type: string;
    readonly kw_supplier: string = "yunjiao";
    constructor(home: string) {
        this.home = home;
    }
    place?: string;
    home: string;
}

//mysql 翻页记录
class PageInfo {
    total: number;
    pageSize: number
    constructor(pageSize: number, total: number) {
        this.total = total
        this.pageSize = pageSize
        this.pageCount = Math.round(this.total / this.pageSize)
    }
    pageCount: number;
    currentPage: number = 0;
}
export class Service {
    private pageInfo: PageInfo;
    private esClient: Elasticsearch.Client;
    constructor() {
        this.esClient = getESConnection()
    }
    async iniPageInfo(): Promise<void> {
        let rows = await query('select * from table_test limit 1')
        this.pageInfo = new PageInfo(50, rows[0].count);
    };
    async bulkIndex(articleESs: Array<ArticleES>) {
        let bulkdata: Array<any> = flatMap(articleESs, (articleES) => {
            let tdo = { index: { _index: `index_01`, _type: articleES._type, _id: articleES._id } };
            delete articleES._id;
            delete articleES._type;
            let what = articleES;
            return [
                tdo,
                what
            ]
        })
        let result = await new Promise((resolve, reject) => {
            this.esClient.bulk({
                requestTimeout: 1000 * 60 * 5,
                body: bulkdata
            }, (err, resp) => {
                if (err) return reject(err)
                resolve(resp)
            })
        }).catch((err) => {
            console.log(err);
            return err;
        })
    }
    async iterablePage(): Promise<void> {
        let self = this;
        for (; this.pageInfo.currentPage < this.pageInfo.pageCount; this.pageInfo.currentPage++) {
            let sql = `select * from table_test limit ${this.pageInfo.currentPage * this.pageInfo.pageSize},${this.pageInfo.pageSize}`;
            console.log(sql);
            await (async () => {
                let rows = await query(sql)
                let articleESs: Array<ArticleES> = map(rows as Array<{}>, (row: any, k, col) => {
                    let articleMysql: ArticleMysql = new ArticleMysql();
                    for (let key in row) {
                        articleMysql[key] = row[key];
                    }
                    let articleEs = articleMysql.ToArticleES()
                    return articleEs
                })
                //写入es
                self.bulkIndex(articleESs)
            })();
        }
    }
    public async LoadData() {
        await this.iniPageInfo();
        await this.iterablePage();
    }
}



