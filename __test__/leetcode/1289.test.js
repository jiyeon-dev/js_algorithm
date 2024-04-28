const solution = require("../../leetcode/1289");

describe("Minimum Falling Path Sum II", () => {
  test("#1", () => {
    expect(
      solution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual(13);
  });
  test("#2", () => {
    expect(solution([[7]])).toEqual(7);
  });
});
