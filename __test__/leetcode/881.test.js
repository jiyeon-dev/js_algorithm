const solution = require("../../leetcode/881");

describe("Boats to Save People", () => {
  test("#1", () => {
    expect(solution([1, 2], 3)).toEqual(1);
  });
  test("#2", () => {
    expect(solution([3, 2, 2, 1], 3)).toEqual(3);
  });
  test("#3", () => {
    expect(solution([3, 5, 3, 4], 5)).toEqual(4);
  });
  test("#4", () => {
    expect(
      solution(
        [
          2, 49, 10, 7, 11, 41, 47, 2, 22, 6, 13, 12, 33, 18, 10, 26, 2, 6, 50,
          10,
        ],
        50
      )
    ).toEqual(11);
  });
});
