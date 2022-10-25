import { MRTClient, ClientRedis, Constrant } from "../../../../MRTclient";

const RepoRetails = async (station_id: string | number) => {
  try {
    const client = new MRTClient();

    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    const retails = await client.getStationRetails(station_id);

    await redisClient.initRedis.set(
      `${Constrant.RedisKeys.MRTStationRetails}${station_id}`,
      JSON.stringify(retails)
    );

    return retails;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const RepoRetailsCache = async (station_id: string | number) => {
  try {
    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    const retails = await redisClient.initRedis.get(
      `${Constrant.RedisKeys.MRTStationRetails}${station_id}`
    );

    return retails;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { RepoRetails, RepoRetailsCache };
