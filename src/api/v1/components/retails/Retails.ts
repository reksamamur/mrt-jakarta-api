import { Request, Response, NextFunction } from "express";

import { RepoRetails, RepoRetailsCache } from "../../repository";

import { Success } from "../../../template";

const Retails = async (req: Request, res: Response) => {
  try {
    const retails = await RepoRetails(req.params.station_id);

    return res.status(200).json(Success(retails, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(`${error}`);
  }
};

const RetailsCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const retails = await RepoRetailsCache(req.params.station_id);

    if (!retails) return next();

    return res
      .status(200)
      .json(Success(JSON.parse(retails), 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(`${error}`);
  }
};

export { Retails, RetailsCache };
