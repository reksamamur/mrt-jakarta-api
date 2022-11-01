import { Request, Response, NextFunction } from "express";
import { RepoSchedules, RepoSchedulesCache } from "../../repository";

import { Success, Error } from "../../../template";

const Schedules = async (req: Request, res: Response) => {
  try {
    const schedules = await RepoSchedules(req.params.station_id);

    return res
      .status(200)
      .json(Success(schedules, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));
  }
};

const SchedulesCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schedules = await RepoSchedulesCache(req.params.station_id);

    if (!schedules) return next();

    return res
      .status(200)
      .json(Success(JSON.parse(schedules), 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));  }
};

export { Schedules, SchedulesCache };
