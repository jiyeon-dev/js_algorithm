const solution = require("../../leetcode/3075");

describe("Maximize Happiness of Selected Children", () => {
  test("#1", () => {
    expect(solution([1, 2, 3], 2)).toEqual(4);
  });
  test("#2", () => {
    expect(solution([1, 1, 1, 1], 2)).toEqual(1);
  });
  test("#32", () => {
    expect(solution([2, 3, 4, 5], 1)).toEqual(5);
  });
});
