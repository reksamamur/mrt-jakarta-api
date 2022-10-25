import { MRTClient, ClientRedis, Constrant } from "../../../../MRTclient";

const RepoStations = async () => {
  try {
    const client = new MRTClient();
    const redisClient = new ClientRedis();

    await redisClient.initRedis.connect();

    const stations = await client.getStations();

    await redisClient.initRedis.set(
      Constrant.RedisKeys.MRTStations,
      JSON.stringify(stations)
    );

    return stations;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const RepoStationsCache = async () => {
  try {
    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    const stations = await redisClient.initRedis.get(
      Constrant.RedisKeys.MRTStations
    );

    return stations;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { RepoStations, RepoStationsCache };
