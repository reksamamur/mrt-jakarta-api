import moment from "moment-timezone";
import { Moment as MomentConst } from "../../constants";

/**
 *
 * @param date string; format "YYYY-MM-DD"
 * @param times string[] | null
 * return string []
 */
export const ConvertToMill = (
  date: moment.MomentInput,
  times: string[] | null
) => {
  const checkDate = moment(date, "YYYY-MM-DD", true).isValid();

  if (!checkDate) throw new Error("Date is invalid")

  if (times) {
    const parseDate = moment(date).format("YYYY-MM-DD");

    return times.map((item) => {
      const combine = `${parseDate} ${item}`;
      return moment(combine).tz(MomentConst.TZJAKARTA).format(MomentConst.X);
    });
  }

  return null;
};
