const solution = require("../../leetcode/945");

describe("Minimum Increment to Make Array Unique", () => {
  test("#1", () => {
    expect(solution([1, 2, 2])).toEqual(1);
  });
  test("#2", () => {
    expect(solution([3, 2, 1, 2, 1, 7])).toEqual(6);
  });
});
