import { createClient, RedisClientType } from "redis";
import { Client } from "redis-om";
import dotenv from "dotenv";
dotenv.config();

export class ClientRedis {
  public initRedisOM: Promise<Client>;
  public initRedis: RedisClientType;

  constructor() {
    this.initRedisOM = this.openOM();
    this.initRedis = createClient({
      url: `${process.env.URL_REDIS}`,
    });

    this.initRedis.on("error", (err) => console.log("Redis Client Error", err));

    this.initRedis.on("connect", () => {
      console.log(`Redis connection established`);
    });
  }

  /**
   * init redis om
   */
  private async openOM() {
    const client = await new Client().open(`${process.env.URL_REDIS}`);
    return client;
  }
}
