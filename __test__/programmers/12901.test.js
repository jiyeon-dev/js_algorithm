const solution = require("../../programmers/12901");

describe("2016년", () => {
  test("#1", () => {
    expect(solution(1, 1)).toEqual("FRI");
  });
  test("#2", () => {
    expect(solution(5, 24)).toEqual("TUE");
  });
  test("#3 - 반례 : index가 -1 인 경우", () => {
    expect(solution(3, 3)).toEqual("THU");
  });
});
