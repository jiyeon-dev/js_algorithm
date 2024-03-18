const solution = require("../../leetcode/452");

describe("Minimum Number of Arrows to Burst Balloons", () => {
  test("#1", () => {
    expect(
      solution([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
      ])
    ).toEqual(2);
  });
  test("#2", () => {
    expect(
      solution([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ])
    ).toEqual(4);
  });
  test("#3", () => {
    expect(
      solution([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
      ])
    ).toEqual(2);
  });
});
