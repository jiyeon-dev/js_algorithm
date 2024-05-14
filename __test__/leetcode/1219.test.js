const solution = require("../../leetcode/1219");

describe("Path with Maximum Gold", () => {
  test("#1", () => {
    expect(
      solution([
        [0, 6, 0],
        [5, 8, 7],
        [0, 9, 0],
      ])
    ).toEqual(24);
  });
  test("#2", () => {
    expect(
      solution([
        [1, 0, 7],
        [2, 0, 6],
        [3, 4, 5],
        [0, 3, 0],
        [9, 0, 20],
      ])
    ).toEqual(28);
  });
});
