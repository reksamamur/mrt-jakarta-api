import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import {
  setupCache,
  buildMemoryStorage,
  buildStorage,
} from "axios-cache-interceptor";
import pino from "pino";
import {
  makeLog,
  handleReq,
  handleReqError,
  handleRes,
  handleResError,
} from "../config/logger";
import { ClientArgs } from "./type";

import { ClientRedis } from "../redis";

export class StructureClient {
  public api: AxiosInstance;
  public logger: pino.Logger;

  constructor(options?: ClientArgs) {
    this.api = setupCache(
      Axios.create({
        baseURL: options?.baseURL,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      // {
      //   storage: this.redisStorage(),
      // }
    );

    this.logger = makeLog({
      enabled: !(
        options?.logOptions?.enabled === undefined ||
        options?.logOptions.enabled === false
      ),
      ...options?.logOptions,
    });

    this.api.interceptors.request.use(
      (config: AxiosRequestConfig) => handleReq(config, this.logger),
      (error: AxiosError<string>) => handleReqError(error, this.logger)
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => handleRes(response, this.logger),
      (error: AxiosError<string>) => handleResError(error, this.logger)
    );
  }

  private redisStorage() {
    return buildStorage({
      async find(key) {
        const client = new ClientRedis();
        await client.initRedis.connect();
        const result = await client.initRedis.get(`axios-cache:${key}`);
        if (result) {
          return JSON.parse(result);
        } else {
          return null;
        }
      },
      async set(key, value) {
        const client = new ClientRedis();
        await client.initRedis.connect();
        await client.initRedis.set(`axios-cache:${key}`, JSON.stringify(value));
        await client.initRedis.disconnect();
      },
      async remove(key) {
        const client = new ClientRedis();
        await client.initRedis.connect();
        await client.initRedis.del(`axios-cache:${key}`);
        await client.initRedis.disconnect();
      },
    });
  }
}
