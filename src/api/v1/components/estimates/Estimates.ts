import { Request, Response } from "express";
import { Success } from "../../../template";

import { RepoEstimates } from "../../repository";

const Estimates = async (req: Request, res: Response) => {
  try {
    const estimates = await RepoEstimates(
      req.params.station_id,
      req.params.next_station_id
    );

    return res
      .status(200)
      .json(Success(estimates, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(`${error}`);
  }
};

export { Estimates };
