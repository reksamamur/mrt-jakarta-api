import { MRTClient, ClientRedis, Constrant } from "../../../../MRTclient";

const RepoStation = async (station_id: string | number) => {
  try {
    const client = new MRTClient();

    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    const station = await client.getStation(station_id);

    await redisClient.initRedis.set(
      `${Constrant.RedisKeys.MRTStation}${station_id}`,
      JSON.stringify(station)
    );

    return station;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const RepoStationCache = async (station_id: string | number) => {
  try {
    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    const station = await redisClient.initRedis.get(
      `${Constrant.RedisKeys.MRTStation}${station_id}`
    );

    return station;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { RepoStation, RepoStationCache };
