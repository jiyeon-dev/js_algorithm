const solution = require("../../leetcode/506");

describe("506. Relative Ranks", () => {
  test("#1", () => {
    expect(solution([5, 4, 3, 2, 1])).toEqual(
      expect.arrayContaining([
        "Gold Medal",
        "Silver Medal",
        "Bronze Medal",
        "4",
        "5",
      ])
    );
  });
  test("#2", () => {
    expect(solution([10, 3, 8, 9, 4])).toEqual(
      expect.arrayContaining([
        "Gold Medal",
        "5",
        "Bronze Medal",
        "Silver Medal",
        "4",
      ])
    );
  });
});
