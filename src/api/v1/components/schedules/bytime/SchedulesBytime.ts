import { Request, Response } from "express";
import { RepoSchedulesCurrent } from "../../../repository";

import { Success } from "../../../../template";

const SchedulesByTime = async (req: Request, res: Response) => {
  try {
    const resultSchedules = await RepoSchedulesCurrent(
      req.params.station_id,
      req.params.milliseconds
    );

    return res
      .status(200)
      .json(Success(resultSchedules, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(`${error}`);
  }
};

export { SchedulesByTime };
