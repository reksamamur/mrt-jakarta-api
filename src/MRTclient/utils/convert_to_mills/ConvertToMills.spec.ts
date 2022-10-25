import { convertToMill } from "./ConvertToMills";

describe("Convert To Mills", () => {
  test("expect tor return array string of milliseconds", () => {
    let expected = ["1665694800000", "1665698400000", "1665702000000"];
    expect(
      convertToMill("2022-10-14", ["04:00", "05:00", "06:00"])
    ).toStrictEqual(expected);
  });

  test("expect to return null", () => {
    expect(convertToMill("2022-10-14", null)).toStrictEqual(null);
  });

  test("expect to return empty array", () => {
    expect(convertToMill("2022-10-14", [])).toStrictEqual([]);
  });

  test("expect to return error 'date is invalid'", () => {
    expect(() => {
      convertToMill("undefined", null);
    }).toThrow("Date is invalid");
  });
});
