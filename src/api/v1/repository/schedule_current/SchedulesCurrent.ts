import {
  MRTClient,
  ClientRedis,
  Constrant,
  Schedules,
  BreakCurrentSchedules,
} from "../../../../MRTclient";

const RepoSchedulesCurrent = async (
  station_id: string | number,
  setTime?: string | null
) => {
  try {
    const client = new MRTClient();

    const redisClient = new ClientRedis();
    await redisClient.initRedis.connect();

    let current = null;
    if (setTime) current = parseInt(setTime);

    const rawSchedules = await redisClient.initRedis.get(
      `${Constrant.RedisKeys.MRTStationSchedules}${station_id}`
    );

    if (rawSchedules) {
      const schedules: Schedules[] = JSON.parse(rawSchedules);
      const resultSchedules = BreakCurrentSchedules(schedules, current);

      return resultSchedules;
    } else {
      const schedules = await client.getStationSchedules(station_id);
      const resultSchedules = BreakCurrentSchedules(schedules, current);

      return resultSchedules;
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { RepoSchedulesCurrent };
