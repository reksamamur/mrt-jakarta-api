import { MRTClient, ClientRedis, Constrant } from "../../../../MRTclient";

const RepoFacilities = async (station_id: string | number) => {
  try {
    const client = new MRTClient();

    const redisCLient = new ClientRedis();
    await redisCLient.initRedis.connect();

    const facilities = await client.getStationFacilities(station_id);

    await redisCLient.initRedis.set(
      `${Constrant.RedisKeys.MRTStationFacilities}${station_id}`,
      JSON.stringify(facilities)
    );

    return facilities;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const RepoFacilitiesCache = async (station_id: string | number) => {
  try {
    const redisCLient = new ClientRedis();

    await redisCLient.initRedis.connect();

    const facilities = await redisCLient.initRedis.get(
      `${Constrant.RedisKeys.MRTStationFacilities}${station_id}`
    );

    return facilities;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { RepoFacilities, RepoFacilitiesCache };
