import { createClient, RedisClientType } from "redis";
import dotenv from "dotenv";
dotenv.config();

export class ClientRedis {
  public initRedis: RedisClientType;

  constructor() {
    this.initRedis = createClient({
      url: `${process.env.URL_REDIS}`,
    });

    this.initRedis.on("error", (err) => console.log("Redis Client Error", err));

    this.initRedis.on("connect", () => {
      console.log(`Redis connection established`);
    });
  }
}
