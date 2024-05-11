const solution = require("../../programmers/12911");

describe("다음 큰 숫자", () => {
  test("#1", () => {
    expect(solution(78)).toEqual(83);
  });
  test("#2", () => {
    expect(solution(15)).toEqual(23);
  });
});
