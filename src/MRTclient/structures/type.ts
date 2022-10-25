import pino from "pino";

export interface ClientArgs {
  logOptions?: pino.LoggerOptions;
  baseURL?: string;
}
