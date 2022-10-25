import { AxiosError, AxiosResponse } from "axios";

import { StructureClient } from "../structures/index";
import { ClientArgs } from "../structures/type";

import { Stations } from "../models";

import dotenv from "dotenv";

dotenv.config();

export class MRTBaseClient extends StructureClient {
  constructor(options?: ClientArgs) {
    super(options);
  }

  public async fetchBaseMRTs(): Promise<Stations[]> {
    return new Promise<Stations[]>((resolve, reject) => {
      this.api
        .get<Stations[]>(`${process.env.URL_STATSIUNS}`)
        .then((response: AxiosResponse<Stations[]>) => resolve(response.data))
        .catch((error: AxiosError<Stations[]>) => reject(error));
    });
  }
}
