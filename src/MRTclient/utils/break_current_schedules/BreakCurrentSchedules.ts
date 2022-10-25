import { Schedules, Constrant, CurrentSchedules, ConvertToMill } from "../..";
import moment, { Moment as MomentType } from "moment-timezone";

export const BreakCurrentSchedules = (
  data: Schedules[],
  byTime?: number | null
): CurrentSchedules[] => {
  try {
    let current: MomentType;

    if (byTime != null) {
      current = moment(byTime).tz(Constrant.Moment.TZJAKARTA);
    } else {
      current = moment().tz(Constrant.Moment.TZJAKARTA);
    }

    const day = current.day();
    const isWeekend = day === 6 || day === 0;

    const current_mill = parseInt(current.format(Constrant.Moment.X));
    const current_date = current.format(Constrant.Moment.DATE);

    return data.map((head) => {
      const timeStack = {
        timesMills: isWeekend
          ? ConvertToMill(current_date, head.times.weekends)
          : ConvertToMill(current_date, head.times.weekdays),
      };

      if (timeStack.timesMills) {
        const closest = timeStack.timesMills.reduce(
          (prev: any, curr: any, index) => {
            return Math.abs(parseInt(curr) - current_mill) < Math.abs(parseInt(prev) - current_mill)
              ? curr
              : prev;
          }
        );

        const foundIndex = timeStack.timesMills.findIndex(
          (value) => value === closest
        );

        const initIndex = foundIndex + 1;
        const endIndex = foundIndex + 4;
        const makeRange = Array.from(
          { length: endIndex - initIndex },
          (v, k) => initIndex + k
        );

        let next: any = [];

        makeRange.forEach((item) => {
          timeStack.timesMills?.reduce((prev, curr, index) => {
            if (index === item) next.push(curr);
            return next;
          }, []);
        });

        const results: CurrentSchedules = {
          location: head.location,
          isWeekend: isWeekend,
          timeMills: {
            now: closest,
            next: next,
          },
        };

        return results;
      }

      const results: CurrentSchedules = {
        location: head.location,
        isWeekend: isWeekend,
        timeMills: null,
      };

      return results;
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
