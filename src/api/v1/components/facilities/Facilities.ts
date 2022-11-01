import { Request, Response, NextFunction } from "express";
import { Success, Error } from "../../../template";

import { RepoFacilities, RepoFacilitiesCache } from "../../repository";

const Facilities = async (req: Request, res: Response) => {
  try {
    const facilities = await RepoFacilities(req.params.station_id);

    return res
      .status(200)
      .json(Success(facilities, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));
  }
};

const FacilitiesCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const facilities = await RepoFacilitiesCache(req.params.station_id);

    if (!facilities) return next();

    return res
      .status(200)
      .json(Success(JSON.parse(facilities), 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(Error(500, `Failed, ${error}`));
  }
};

export { Facilities, FacilitiesCache };
