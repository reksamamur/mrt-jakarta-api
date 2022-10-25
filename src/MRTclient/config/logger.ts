import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import pino from "pino";
import { WatchError } from "redis";

export const makeLog = (
  logoptions?: pino.LoggerOptions | pino.DestinationStream
): pino.Logger => pino(logoptions);

export const redisLog = (error: WatchError, logger: pino.Logger) => {
  logger.error(`[ERROR] CODE ${error.name || "UNKNOWN"} | ${error.message}`);
  return error;
};

export const handleReq = (
  config: AxiosRequestConfig,
  logger: pino.Logger
): AxiosRequestConfig => {
  logger.info(
    `[CONFIG] ${config.method?.toUpperCase() || ""} | ${config.url || ""}`
  );
  return config;
};

export const handleReqError = (
  error: AxiosError<unknown>,
  logger: pino.Logger
): Promise<AxiosError<unknown>> => {
  logger.error(`[ERROR] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
  throw error;
};

export const handleRes = (
  response: AxiosResponse,
  logger: pino.Logger
): AxiosResponse => {
  logger.info(response.data);
  return response;
};

export const handleResError = (
  error: AxiosError<unknown>,
  logger: pino.Logger
): Promise<AxiosError<unknown>> => {
  logger.error(`[ERROR] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
  throw error;
};
