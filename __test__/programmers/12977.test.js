const solution = require("../../programmers/12977");

describe("소수 만들기", () => {
  test("#1", () => {
    expect(solution([1, 2, 3, 4])).toEqual(1);
  });
  test("#2", () => {
    expect(solution([1, 2, 7, 6, 4])).toEqual(4);
  });
});
