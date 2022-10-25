import { MRTClient } from "../../../../MRTclient";

const RepoEstimates = async (
  station_id: string | number,
  next_station_id: string | number
) => {
  try {
    const client = new MRTClient();

    const estimates = await client.getStationExtimates(
      station_id,
      next_station_id
    );

    return estimates;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { RepoEstimates };
