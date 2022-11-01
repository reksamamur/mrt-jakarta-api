import { Request, Response, NextFunction } from "express";
import { RepoStation, RepoStationCache } from "../../repository";

import { Success, Error } from "../../../template";

const Station = async (req: Request, res: Response) => {
  try {
    const station = await RepoStation(req.params.station_id);

    return res.status(200).json(Success(station, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));
  }
};

const StationCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const station = await RepoStationCache(req.params.station_id);

    if (!station) return next();

    return res
      .status(200)
      .json(Success(JSON.parse(station), 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));
  }
};

export { Station, StationCache };
