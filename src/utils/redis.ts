import  {createClient} from "redis"

export function getRedisDb() {
    let client = createClient(6379, '127.0.0.1', {});
    client.on("error",  (err) => {
        console.log("Error " + err);
    });
    return client;
}