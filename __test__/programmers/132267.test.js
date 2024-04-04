const solution = require("../../programmers/132267");

describe("콜라 문제", () => {
  test("#1", () => {
    expect(solution(2, 1, 20)).toEqual(19);
  });
  test("#2", () => {
    expect(solution(3, 1, 20)).toEqual(9);
  });
  test("#3 - 반례", () => {
    expect(solution(3, 2, 20)).toEqual(36);
  });
});
