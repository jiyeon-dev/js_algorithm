const solution = require("../../leetcode/41");

describe("First Missing Positive", () => {
  test("#1", () => {
    expect(solution([1, 2, 0])).toEqual(3);
  });
  test("#2", () => {
    expect(solution([3, 4, -1, 1])).toEqual(2);
  });
  test("#3", () => {
    expect(solution([7, 8, 9, 11, 12])).toEqual(1);
  });
});
