const solution = require("../../leetcode/713");

describe("Subarray Product Less Than K", () => {
  test("#1", () => {
    expect(solution([10, 5, 2, 6], 100)).toEqual(8);
  });
  test("#2", () => {
    expect(solution([1, 2, 3], 0)).toEqual(0);
  });
  test("#3 - 반례", () => {
    expect(solution([10, 5, 2, 1, 6], 8)).toEqual(6);
  });
  test("#4 - 반례", () => {
    expect(
      solution([57, 44, 92, 28, 66, 60, 37, 33, 52, 38, 29, 76, 8, 75, 22], 18)
    ).toEqual(1);
  });
});
