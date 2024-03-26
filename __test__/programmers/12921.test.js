const solution = require("../../programmers/12921");

describe("소수 찾기", () => {
  test("#1", () => {
    expect(solution(10)).toEqual(4);
  });
  test("#2", () => {
    expect(solution(5)).toEqual(3);
  });
});
