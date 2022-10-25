import { Request, Response } from "express";
import { RepoSchedulesCurrent } from "../../../repository";

import { Success } from "../../../../template";

const SchedulesNow = async (req: Request, res: Response) => {
  try {
    const resultSchedules = await RepoSchedulesCurrent(req.params.station_id);

    return res
      .status(200)
      .json(Success(resultSchedules, 200, "Success getting data"));
  } catch (error) {
    return res.status(500).json(`${error}`);
  }
};

export { SchedulesNow };
