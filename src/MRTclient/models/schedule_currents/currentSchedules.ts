import { TimeMills } from "../time_mills";

export interface CurrentSchedules {
  location: string;
  isWeekend: boolean;
  timeMills: TimeMills | null;
}
