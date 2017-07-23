import {Service} from "../service/person"
import GetDB from "../utils/mongo"
import Task from "../utils/Task"
import Async from "../utils/myasync"

//then版 类 async.whilst 方式遍历
export default async function personSqlToEs() {
   let service=new Service();
   await service.LoadData();
}

if (!module.parent) {
    let t = new Task("job test", personSqlToEs);
    console.log(" job test start" + t.start());
}