import { Request, Response, NextFunction } from "express";
import { RepoStations, RepoStationsCache } from "../../repository";

import { Success, Error } from "../../../template";

const Stations = async (req: Request, res: Response) => {
  try {
    const stations = await RepoStations();

    return res.status(200).json(Success(stations, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));
  }
};

const StationsCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const stations = await RepoStationsCache();

    if (!stations) return next();

    return res
      .status(200)
      .json(Success(JSON.parse(stations), 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));
  }
};

export { Stations, StationsCache };
