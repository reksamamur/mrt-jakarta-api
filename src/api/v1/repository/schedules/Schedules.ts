import { MRTClient, ClientRedis, Constrant } from "../../../../MRTclient";

const RepoSchedules = async (station_id: string | number) => {
  try {
    const client = new MRTClient();

    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    const schedules = await client.getStationSchedules(station_id);

    await redisClient.initRedis.set(
      `${Constrant.RedisKeys.MRTStationSchedules}${station_id}`,
      JSON.stringify(schedules)
    );

    return schedules;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const RepoSchedulesCache = async (station_id: string | number) => {
  try {
    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    const schedules = await redisClient.initRedis.get(
      `${Constrant.RedisKeys.MRTStationSchedules}${station_id}`
    );

    return schedules;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { RepoSchedules, RepoSchedulesCache };
