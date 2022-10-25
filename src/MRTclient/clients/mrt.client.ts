import { MRTBaseClient } from "../base";
import {
  Estimates,
  Facilities,
  Retails,
  Stations,
  Station,
  Schedules,
  Times,
} from "../models";

export class MRTClient {
  /**
   * async Get All Station
   */
  public async getStations(): Promise<Station[]> {
    const baseClient = new MRTBaseClient();
    return new Promise<Station[]>((resolve, reject) => {
      baseClient
        .fetchBaseMRTs()
        .then((response) => {
          const station: Station[] = response.map((obj) => {
            return {
              nid: obj.nid,
              title: obj.title,
              catatan: obj.catatan,
              isbig: obj.isbig,
              path: obj.path,
              peta_lokalitas: obj.peta_lokalitas,
              banner: obj.banner,
              urutan: obj.urutan,
            };
          });
          return resolve(station);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }

  /**
   * async Get One Station by station ids
   */
  public async getStation(station_id: string | number): Promise<Station> {
    const baseClient = new MRTBaseClient();
    return new Promise<Station>((resolve, reject) => {
      baseClient
        .fetchBaseMRTs()
        .then((response) => {
          const find = response.find((obj) => obj.nid === station_id);

          if (!find) return reject("Not Found");

          return resolve(find);
        })
        .catch((error) => reject(error));
    });
  }

  /**
   * async Get Station Schedules by station ids
   */
  public async getStationSchedules(
    station_id: string | number
  ): Promise<Schedules[]> {
    const baseClient = new MRTBaseClient();
    return new Promise<Schedules[]>((resolve, reject) => {
      baseClient
        .fetchBaseMRTs()
        .then((response) => {
          const find = response.find((obj) => obj.nid === station_id);

          if (!find) return reject("Not Found");

          return resolve(find.schedules);
        })
        .catch((error) => reject(error));
    });
  }

  /**
   * async Get Station Retails by station ids
   */
  public async getStationRetails(
    station_id: string | number
  ): Promise<Retails[]> {
    const baseClient = new MRTBaseClient();
    return new Promise<Retails[]>((resolve, reject) => {
      baseClient
        .fetchBaseMRTs()
        .then((response) => {
          const find = response.find((obj) => obj.nid === station_id);

          if (!find) return reject("Not Found");

          return resolve(find.retails);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }

  /**
   * async Get Station Facilities by station ids
   */
  public async getStationFacilities(
    station_id: string | number
  ): Promise<Facilities[]> {
    const baseClient = new MRTBaseClient();
    return new Promise<Facilities[]>((resolve, reject) => {
      baseClient
        .fetchBaseMRTs()
        .then((response) => {
          const find = response.find((obj) => obj.nid === station_id);

          if (!find) return reject("Not Found");

          return resolve(find.fasilitas);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }

  /**
   * async Get Station Estimate from and to station ids
   */
  public getStationExtimates(
    station_id: string | number,
    next_station_id: string | number
  ): Promise<Estimates> {
    const baseClient = new MRTBaseClient();

    return new Promise((resolve, reject) => {
      baseClient
        .fetchBaseMRTs()
        .then((response) => {
          const find = response.find((obj) => obj.nid === station_id);

          if (!find) return reject("Not Found");

          const foundEstimate = find.estimasi.find(
            (obj) => obj.stasiun_nid == next_station_id
          );

          if (!foundEstimate) return reject("Not Found Estimate");

          return resolve(foundEstimate);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }

  /**
   * async Get All Estimate Station by station ids
   */
  public getStationAllExtimates(
    station_id: string | number
  ): Promise<Estimates[]> {
    const baseClient = new MRTBaseClient();

    return new Promise((resolve, reject) => {
      baseClient
        .fetchBaseMRTs()
        .then((response) => {
          const find = response.find((obj) => obj.nid === station_id);

          if (!find) return reject("Not Found");

          return resolve(find.estimasi);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }
}
